import { useState } from "react";
import { useSelector } from "react-redux";
import { cardsModel, selectCards } from "./cardsSlice";

export default function Card(props:any){
    const [ front, setFront ] = useState<boolean>(false);
    const cards = useSelector(selectCards);
    const card : cardsModel = cards[props?.id];
    const flipState = () => {
        setFront(!front)
    }
    return(
        <>
        <div className="bg-slate-400 rounded-lg p-8 text-center m-2 mb-4 cursor-pointer" onClick={flipState}>
                <label>{ front ? card.front : card?.back }</label>
        </div>
        </>
    )
}