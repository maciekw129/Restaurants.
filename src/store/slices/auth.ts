import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';

interface loginThunk {
    [key: string]: string;
};

const user = JSON.parse(localStorage.getItem('user') || '0');

export const login = createAsyncThunk(
    "auth/login",
    async (values: loginThunk, thunkAPI) => {
        try {
            const data = await requests.login(values.email, values.password)
            return data; 
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);  
            }
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        localStorage.removeItem('user');
    }
);

interface AuthState {
    isLogged: boolean;
    user: any;
    isLoading: boolean;
    message: any;
}

const initialState: AuthState = user ? 
{ user: user, isLogged: true, isLoading: false, message: '' } 
: { user: null, isLogged: false, isLoading: false, message: ''};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = '';
        }
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
    },
});

export const { clearMessage } = authSlice.actions;
export default authSlice.reducer;