import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 20,
    score: 0,
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
           state.question_category = action.payload
        },
        changeDifficulty: (state, action) => {
            state.question_difficulty = action.payload
        },
        changeType: (state, action) => {
            state.question_type = action.payload
        },
        changeAmount: (state, action) => {
            state.amount_of_question = action.payload
        },
        changeScore: (state, action) => {
            state.score = action.payload
        },
    },
});

export const { changeCategory, changeDifficulty, changeType, changeAmount, changeScore } = quizSlice.actions;

export default quizSlice.reducer;
