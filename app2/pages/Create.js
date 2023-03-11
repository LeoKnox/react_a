import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState({q:"type here", a:"ans here"});
    const [newA, setNewAns] = useState("type here");
    const [newC, setNewCol] = useState("type here");
    const [generic, setGeneric] = useState({});

    function changeGeneric(event) {
        let temp={};
        if (event.target.id=="z") {
            temp.z = event.target.value;
        } else if (event.target.id=="q") {
            temp.q = event.target.value;
        }
        setGeneric(temp);
        console.log(generic);
    }

    return(
        <>
        <input id="z" value={generic.z} onChange={changeGeneric} type="text" />
        <input id="q" value={generic.q} onChange={changeGeneric} type="text" />
        <input value={newQ.a} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={() => addKanji(generic)} value={newQ}>add</button>
        </>
    )
}

export default Create;