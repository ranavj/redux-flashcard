import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../routes";
import Card from "../cards/card";
import { selectQuizzes } from "./quizzeSlice";

export function Quizze(){
   const quizzes = useSelector(selectQuizzes);
   const { quizId } = useParams<{quizId: string}>()
   const quiz = quizzes[quizId]
    return(
        <section className="m-5">
            <h1 className="text-center text-xl font-bold">redux</h1>
            {quiz.cardIds.map((id:any) => (
                <Card key={id} id={id} />
            ))}
            <Link to={ROUTES.newQuizRoute()} className="bg-slate-800 text-white text-center w-48 block mx-auto p-2 px-4 rounded-lg hover:bg-slate-900">Create a New Quiz</Link>
        </section>
    )
}