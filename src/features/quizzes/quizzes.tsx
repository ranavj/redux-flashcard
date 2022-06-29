import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ALL_ICONS } from "../../data/icons";
import ROUTES from "../../routes";
import { selectQuizzes } from "./quizzeSlice";

export function Quizzes() {

    const quizzes = useSelector(selectQuizzes);

    return (
        <section className="m-5">
            <h1 className="text-center text-xl font-bold">Quizzes</h1>
            <ul>
                <ul className="grid grid-cols-12 gap-2 mb-4">
                    {Object.values(quizzes).map((item: any) => (
                        <li key={item?.id} className="p-5 border-black border col-span-1 text-center font-bold cursor-pointer">
                            <Link to={ROUTES.quizRoute(item?.id)}>{item?.name}</Link>
                        </li>
                    ))}
                </ul>
            </ul>
            <Link to={ROUTES.newQuizRoute()} className="bg-slate-800 text-white text-center w-48 block mx-auto p-2 px-4 rounded-lg hover:bg-slate-900">Create New Quiz</Link>
        </section>
    )
}