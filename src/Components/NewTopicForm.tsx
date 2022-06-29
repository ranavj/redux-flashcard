import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4,  } from "uuid";

import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";
import ROUTES from "../routes";
export function NewTopicForm() {

    const [name, setname] = useState<string>('');
    const [icon, setIcon] = useState<string>();
    const dispatch = useDispatch();
    const history = useHistory();

    const topicSetHandler = (e: any) => {
        setname( e?.currentTarget?.value );
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (name?.length === 0) return;
        dispatch(addTopic({name, icon, id: uuidv4()}))
        history.push(ROUTES.topicsRoute())
    }

    return (
        <section className="m-5">
            <h1 className="text-center text-xl font-bold">Create a new topic</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4 mt-2">
                <input type='text' onChange={(e) => topicSetHandler(e)} value={name} className="col-span-6 px-4 py-3 border border-black rounded" placeholder="Topic Name" />
                <select className="col-span-6 px-4 py-3 border border-black rounded" onChange={e => setIcon(e?.currentTarget.value)} defaultValue="default">
                    <option value="default" disabled hidden>
                        Choose an icon
                    </option>
                    {ALL_ICONS.map((item) => (
                        <option key={item?.name} value={item?.url}>{item?.name}</option>
                    ))}
                </select>
                <button type="submit" className="bg-slate-800 text-white text-center col-span-2 p-2 px-4 rounded-lg hover:bg-slate-900">Add Topic</button>
            </form>
            {/* <pre>{name}</pre>
            <pre>{icon}</pre> */}
        </section>
    )
}