import { useState } from "react";
import { useParams } from 'react-router-dom';
import { oneKanji } from "./kanji";

function Update() {
    const {id} = useParams();
    const single = oneKanji(id);
    const [q, setQ] = useState(single.q);

    console.log(single);

    function updateEntry() {
        console.log("update entry");
    }

    return (
        <>
            <h1>One Kanji</h1>
            <p>
                Q:{single.q}
                <input type="text" name="ques" value={q} onChange={updateEntry} />
            </p>
            <p>
                A:{single.a}
            </p>
            <p>
                I:{single.id}
            </p>
        </>
    )
}

export default Update;