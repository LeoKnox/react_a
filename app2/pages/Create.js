import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState({q:"type here", a:"ans here"});
    const [newA, setNewAns] = useState("type here");
    const [newC, setNewCol] = useState("type here");

    function changeGeneric(event) {
        console.log(event.target.id);
    }

    return(
        <>
        <input id="z" value="red" onChange={changeGeneric} type="text" />
        <input id="q" value={newQ.q} onChange={e => setNewQuiz(e.target.value)} type="text" />
        <input value={newQ.a} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={addKanji} value={newQ}>add</button>
        </>
    )
}

export default Create;