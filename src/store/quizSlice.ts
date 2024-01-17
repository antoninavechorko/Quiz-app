import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface IQuizState {
    question_category: string;
    question_difficulty: string;
    question_type: string;
    amount_of_question: number;
    score: number;
}

const initialState: IQuizState = {
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
        changeCategory: (state, action: PayloadAction<string>) => {
            state.question_category = action.payload
        },
        changeDifficulty: (state, action: PayloadAction<string>) => {
            state.question_difficulty = action.payload
        },
        changeType: (state, action: PayloadAction<string>) => {
            state.question_type = action.payload
        },
        changeAmount: (state, action: PayloadAction<number>) => {
            state.amount_of_question = action.payload
        },
        changeScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload
        },
    },
});

export const {changeCategory, changeDifficulty, changeType, changeAmount, changeScore} = quizSlice.actions;
export const selectQuizState = (state: RootState) => state.quiz;

export default quizSlice.reducer;
