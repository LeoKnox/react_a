import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState("type here");
    const [newA, setNewAns] = useState("type here");
    const [newC, setNewCol] = useState("type here");

    console.log(addKanji);

    return(
        <>
        <input value={newQ} onChange={e => setNewQuiz(e.target.value)} type="text" />
        <input value={newA} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={addKanji} value={"newQ"}>add</button>
        </>
    )
}

export default Create;