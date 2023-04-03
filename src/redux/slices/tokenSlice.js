import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: null,
    refreshToken: null,
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setAccessToken(state, action) {
            state.accessToken = action.payload;
        },
        setRefreshToken(state, action) {
            state.refreshToken = action.payload;
        },
        setLogout(state) {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const { setAccessToken, setRefreshToken, setLogout } = tokenSlice.actions;

export default tokenSlice.reducer;
