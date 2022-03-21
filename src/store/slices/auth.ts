import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';
import axios, { AxiosError } from 'axios';

interface valuesTypes {
    [key: string]: string;
}

const user = JSON.parse(localStorage.getItem('user') || '0');

export const login = createAsyncThunk(
    "auth/login",
    async (values: valuesTypes, thunkAPI) => {
        try {
            const data = await requests.login(values.email, values.password)
            return data; 
        } catch (e) {
            const error = e as Error | AxiosError;
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message);  
            }
            throw error;
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        localStorage.removeItem('user');
    }
);

export const register = createAsyncThunk(
    "auth/registerGuest",
    async (values: valuesTypes, thunkAPI) => {
        try {
            const data = values.accountType === 'restaurant' ? await requests.registerRestaurant(values) : await requests.registerGuest(values);
            return data;
        } catch (e) {
            const error = e as Error | AxiosError;
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data.message);  
            }
            throw error;
        }
    }
);

interface AuthState {
    isLogged: boolean;
    user: any;
    isLoading: boolean;
    message: any;
    isRegisterSuccessfull: boolean;
}

const initialState: AuthState = user ? 
{ user: user, isLogged: true, isLoading: false, message: '', isRegisterSuccessfull: false } 
: { user: null, isLogged: false, isLoading: false, message: '', isRegisterSuccessfull: false };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = '';
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        clearRegister: (state) => {
            state.isRegisterSuccessfull = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogged = true;
            state.user = action.payload;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.message = '';
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null;
            state.isLogged = false;
        });
        builder.addCase(register.fulfilled, (state) => {
            state.isRegisterSuccessfull = true;
            state.isLoading = false;
        });
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
            state.message = '';
        });
        builder.addCase(register.rejected, (state, action) => {
            state.isRegisterSuccessfull = false;
            state.isLoading = false;
            state.message = action.payload;
        })
    },
});

export const { clearMessage, clearRegister, stopLoading } = authSlice.actions;
export default authSlice.reducer;