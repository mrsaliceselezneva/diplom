import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adminName: null,
    adminLastname: null,
    adminPatronymic: null,
    adminEmail: null,
    adminPhone: null,
    adminPassword: null,
    institutionName: null,
    institutionEmail: null,
    institutionAddress: null,
};

const requestSlice = createSlice({
    name: 'requestSlice',
    initialState,
    reducers: {
        setAdminName(state, action) {
            state.adminName = action.payload;
        },
        setAdminLastName(state, action) {
            state.adminLastname = action.payload;
        },
        setAdminPatronymic(state, action) {
            state.adminPatronymic = action.payload;
        },
        setAdminEmail(state, action) {
            state.adminEmail = action.payload;
        },
        setAdminPhone(state, action) {
            state.adminPhone = action.payload;
        },
        setAdminPassword(state, action) {
            state.adminPassword = action.payload;
        },
        setInstitutionName(state, action) {
            state.institutionName = action.payload;
        },
        setInstitutionEmail(state, action) {
            state.institutionEmail = action.payload;
        },
        setInstitutionAddress(state, action) {
            state.institutionAddress = action.payload;
        },
        setClear(state) {
            state.adminName = null;
            state.adminLastname = null;
            state.adminPatronymic = null;
            state.adminEmail = null;
            state.adminPhone = null;
            state.adminPassword = null;
            state.institutionName = null;
            state.institutionEmail = null;
            state.institutionAddress = null;
            localStorage.clear();
        },
    },
});

export const {
    setAdminName,
    setAdminLastName,
    setAdminPatronymic,
    setAdminEmail,
    setAdminPhone,
    setAdminPassword,
    setInstitutionName,
    setInstitutionEmail,
    setInstitutionAddress,
    setClear,
} = requestSlice.actions;

export default requestSlice.reducer;
