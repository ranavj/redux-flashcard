import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export interface quizzesModel{
    id: string;
    topicId: string;
    name: string;
    cardIds?: (Array<string>);
}
export const quizzeSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: <{ [key: string]: quizzesModel }>{}
    },
    reducers: {
        addQuizz: (state, action) => {
            state.quizzes[action.payload.id] = { ...action.payload }
        }
    }
})

export const thunkAddQuizAddQuizzId = (payload:quizzesModel) => {
    const { id, name, topicId, cardIds } = payload;
    return (dispatch: (arg0: { payload: any; type: string; }) => void) => {
        dispatch(addQuizId({ id, topicId }))
        dispatch(quizzeSlice.actions.addQuizz(payload))
    }
}

export const selectQuizzes = ( state:any ) => state.quizzes.quizzes;

export const { addQuizz } = quizzeSlice.actions;

export default quizzeSlice.reducer;