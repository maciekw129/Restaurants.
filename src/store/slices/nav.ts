import { createSlice } from '@reduxjs/toolkit';

interface NavState {
    isNavVisible: boolean;
}

const initialState: NavState = {
    isNavVisible: false,
}

const navSlice = createSlice({
    name: 'isNavVisible',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.isNavVisible = !state.isNavVisible;
        }
    }
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;