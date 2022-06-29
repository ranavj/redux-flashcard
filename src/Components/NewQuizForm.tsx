import { SyntheticEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4, } from "uuid";
import { addCards } from "../features/cards/cardsSlice";
import { quizzesModel, thunkAddQuizAddQuizzId } from "../features/quizzes/quizzeSlice";
import { selectTopics } from "../features/topics/topicsSlice";
import ROUTES from "../routes";

export type cardsModel = {
    cardId?: string;
    front: string;
    back: string
}
export function NewQuizForm() {

    const [name, setName] = useState<string>('');
    const [topicId, setTopicId] = useState<string>('');
    const [cards, setCards] = useState<Array<cardsModel>>([]);
    const topics = useSelector(selectTopics);
    const dispatch = useDispatch();
    const history = useHistory();
    const addCardInputs = (e: any) => {
        e.preventDefault();
        setCards(cards.concat({ front: "", back: "" }));
    };

    function createCard(card: cardsModel[]) {
        if (card.length === 0) return;
        return (
            <>
                {card && card.map((item, index) => {
                    return (
                        <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
                            <input type='text'
                                value={cards[index]?.front}
                                onChange={(e) => updateCard(index, 'front', e.currentTarget.value)}
                                className="col-span-6 px-4 py-3 border border-black rounded" placeholder="Front" />
                            <input type='text'
                                value={cards[index]?.back}
                                onChange={(e) => updateCard(index, 'back', e.currentTarget.value)}
                                className="col-span-6 px-4 py-3 border border-black rounded" placeholder="Back" />
                            <button className="col-span-2 col-start-11 text-right cursor-pointer" onClick={(e) => removeCard(e, index)}>remove card</button>
                        </div>
                    )
                })}
            </>
        )
    };

    const removeCard = (e: any, index: number) => {
        e.preventDefault();
        setCards(cards.filter((item, i) => i !== index))
    };

    const updateCard = (index: number, side: keyof cardsModel, value: string) => {
        const newCards: Array<cardsModel> = cards.slice();
        newCards[index][side] = value
        setCards(newCards);
    }

    const cardsList = () => {

        const parseCard = cards.map((card) => {
            const cardId = uuidv4();
            dispatch(addCards({ ...card, id: cardId }));
            return { ...card, id: cardId }
        });

        return parseCard;
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (name.length === 0) return;

        const cardsIds = cardsList().map(item => item.id);

        const payload: quizzesModel = { id: uuidv4(), topicId, name, cardIds: [...cardsIds] };
        dispatch<any>(thunkAddQuizAddQuizzId(payload));
        history.push(ROUTES.quizzesRoute())
    }
    return (
        <section className="m-5">
            <h1 className="text-center text-xl font-bold">Create a new quiz</h1>
            <form className="grid grid-cols-12 gap-4 mt-2" onSubmit={handleSubmit}>
                <input type='text' onChange={e => setName(e.currentTarget.value)} value={name} className="col-span-6 px-4 py-3 border border-black rounded" placeholder="Topic Name" />
                <select className="col-span-6 px-4 py-3 border border-black rounded" onChange={e => setTopicId(e.currentTarget.value)} defaultValue="default" >
                    <option value="default" disabled hidden>
                        Choose Topic
                    </option>
                    {Object.values(topics).map((item: any) => {
                        return (<option key={item?.id} value={item?.id}>{item?.name}</option>)
                    })}name
                </select>
                {createCard(cards)}
                {/* <p className="col-span-12">{JSON.stringify(cards)}</p> */}
                <button
                    onClick={(e) => addCardInputs(e)}
                    className="col-span-2 bg-slate-800 text-white text-center  p-2 px-4 rounded-lg hover:bg-slate-900">Add a card</button>
                <button type="submit" className="col-span-2 bg-slate-800 text-white text-center col-span-2 p-2 px-4 rounded-lg hover:bg-slate-900">Create Quiz</button>
            </form>
        </section>
    )
}

