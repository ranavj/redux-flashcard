import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ROUTES from "../../routes"
import { selectTopics } from "./topicsSlice"
export function Topics() {

    const topics = useSelector(selectTopics);
    console.log(topics);
    return (
        <section className="m-5">
            <h1 className="text-center text-xl font-bold">Topics</h1>
            <ul>
                { topics && Object.values(topics).map((item: any) => (
                    <li key={item?.id} className="grid grid-cols-12 border p-4 border-black content-center mb-2 rounded-lg cursor-pointer">
                        <Link to={ROUTES.topicRoute(item.id)} className="grid col-span-12 grid-cols-12">
                            <img width='70' src={item?.icon} alt='image' className="col-span-1" />
                            <div className="col-span-2 self-center">
                                <label>{item?.name}</label>
                                <p>{item?.quizIds?.length} Topicss</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={ROUTES.newTopicRoute()} className="bg-slate-800 text-white text-center w-48 block mx-auto p-2 px-4 rounded-lg hover:bg-slate-900">Create New Topic</Link>
        </section>
    )
}