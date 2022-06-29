import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ALL_ICONS } from "../../data/icons";
import ROUTES from "../../routes";
import { selectQuizzes } from "../quizzes/quizzeSlice";
import { selectTopics, topicModel } from "./topicsSlice";
type topicParams = {
    topicId?: string
}
export function Topic() {
    const topics = useSelector(selectTopics);
    const quizzes = useSelector(selectQuizzes);
    const { topicId = '' } = useParams<topicParams>();
    const quizForTopics = topics[topicId].quizIds?.map(quizId => quizzes[quizId])
    console.log(useParams());
    return (
        <section className="m-5">
            <div className="text-center mx-auto">
                <img className="block mx-auto" src={topics?.[topicId]?.icon} width="50" />
                <h1 className="text-center text-xl font-bold">Topic {topics?.[topicId]?.name}</h1>
            </div>
            <ul className="grid grid-cols-12 gap-2 mb-4">
                {quizForTopics?.map(quiz => (
                    <li className="p-5 border-black border col-span-1 text-center font-bold">
                        <Link to={''}>quiz?.name</Link>
                    </li>
                ))}
            </ul>
            <Link to={ROUTES.newQuizRoute()} className="bg-slate-800 text-white text-center w-48 block mx-auto p-2 px-4 rounded-lg hover:bg-slate-900">Create a new Quiz</Link>
        </section>
    )
}