import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState({q:"type here", a:"ans here"});
    const [newA, setNewAns] = useState("type here");
    const [newC, setNewCol] = useState("type here");

    function addKanji2(event) {
        console.log("k2"+event.target.id);
    }

    return(
        <>
        <input id="q" value={newQ.q} onChange={e => setNewQuiz(e.target.value)} type="text" />
        <input value={newQ.a} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={addKanji2} value={newQ}>add</button>
        </>
    )
}

export default Create;