import { useState } from "react";
import { useParams } from 'react-router-dom';
import { oneKanji } from "./kanji";

function Update() {
    const {id} = useParams();
    const single = oneKanji(id);
    const [q, setQ] = useState(single.q);
    const [a, setA] = useState(single.a);
    const [i, setId] = useState(single.id);

    console.log(single);

    function updateEntry() {
        console.log("update entry");
    }

    return (
        <>
            <h1>One Kanji</h1>
            <p>
                Q:
                <input type="text" name="ques" value={q} onChange={updateEntry} />
            </p>
            <p>
                A:
                <input type="text" name="ans" value={a} onChange={updateEntry} />
            </p>
            <p>
                I:
                <input type="text" name="id" value={i} onChange={updateEntry} />
            </p>
        </>
    )
}

export default Update;