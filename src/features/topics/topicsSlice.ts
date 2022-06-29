import { createSlice } from "@reduxjs/toolkit";

export interface topicModel{
    id: string,
    name: string,
    icon: string,
    quizIds?: string[]
}
export const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: <{ [key:string] : topicModel }>{}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = { ...action.payload, quizIds: [] }
        },

        addQuizId: (state, action) => {
            state.topics[action.payload.topicId]?.quizIds?.push(action.payload.id)
        }
    }
});

export const selectTopics = (state:any) => state.topics.topics as {[key: string]: topicModel};

export const { addTopic, addQuizId } = topics.actions;

export default topics.reducer;