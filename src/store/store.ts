import {configureStore} from "@reduxjs/toolkit";
import quizReducer from '../store/quizSlice'

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
    }
})