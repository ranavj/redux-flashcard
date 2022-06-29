import { createSlice } from "@reduxjs/toolkit";
export type cardsModel = {
    id: string;
    front: string;
    back: string;
}
export const cardsSlice = createSlice({
    name: 'cards',
    initialState:{
        cards: <{ [key: string] : cardsModel }>{ }
    },
    reducers: {
        addCards: (state, action) => {
            state.cards[action.payload.id] = {...action.payload}
        }
    }
});

export const selectCards = (state: any) => state.cards.cards as {[key: string] : cardsModel};

export const { addCards } = cardsSlice.actions;

export default cardsSlice.reducer;