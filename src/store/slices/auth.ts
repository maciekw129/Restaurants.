import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';

interface loginThunk {
    [key: string]: string;
};

const user = JSON.parse(localStorage.getItem('user') || '0');

export const login = createAsyncThunk(
    "auth/login",
    async (values: loginThunk) => {
        const data = await requests.login(values.email, values.password)
        return data;
    }
);

interface AuthState {
    isLogged: boolean;
    user: any;
    isLoading: boolean;
}

const initialState: AuthState = user ? { user: user, isLogged: true, isLoading: false } : { user: null, isLogged: false, isLoading: false};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogged = true;
            state.user = action.payload;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log('loging failed');
            state.isLoading = false;
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export default authSlice.reducer;