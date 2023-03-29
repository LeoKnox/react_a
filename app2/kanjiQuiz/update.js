import { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { oneKanji, updateKanji } from "./kanji";

function Update() {
    const {id} = useParams();
    const single = oneKanji(id);
    const [q, setQ] = useState(single.q);
    const [a, setA] = useState(single.a);
    const [i, setId] = useState(single.id);

    function updateEntry(e) {
        if (e.target.name === "ques") {
            setQ(e.target.value)
        }
        if (e.target.name === "ans") {
            setA(e.target.value)
        }
        if (e.target.name === "id") {
            setId(e.target.value)
        }
    }

    function submitKanji() {
        updateKanji(id, {a:a, q:q, id:Number(i)})
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
                <input type="number" name="id" value={i} />
            </p>
            <button onClick={submitKanji}>Update</button>
            <button><Link to={`/`}>Home</Link></button>
        </>
    )
}

export default Update;