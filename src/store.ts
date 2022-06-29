import { configureStore } from "@reduxjs/toolkit";
import topicReducer from './features/topics/topicsSlice';
import quizzesReducer from './features/quizzes/quizzeSlice';
import cardsReducers from './features/cards/cardsSlice';
export default configureStore({
    reducer: {
        topics: topicReducer,
        quizzes: quizzesReducer,
        cards: cardsReducers
    }
})