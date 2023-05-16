import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentList: [],
};

const missLessonSlice = createSlice({
    name: 'missLessonSlice',
    initialState,
    reducers: {
        setAddStudent(state, action) {
            state.studentList.push(action.payload);
        },
        setDelStudent(state, action) {
            state.studentList = state.studentList.filter((el) => el.id !== action.payload.id);
        },
        setClearStudent(state){
            state.studentList = [];
        }
    },
});

export const {
    setAddStudent,
    setDelStudent,
    setClearStudent,
} = missLessonSlice.actions;

export default missLessonSlice.reducer;
