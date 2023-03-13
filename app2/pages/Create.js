import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState("");
    const [newA, setNewAns] = useState("");
    const [newC, setNewCol] = useState("");
    const [generic, setGeneric] = useState({z:"", q:""});

    function changeGeneric(event) {
        if (event.target.id=="a") {
            setNewAns(event.target.value);
        };
        if (event.target.id=="q") {
            setNewQuiz(event.target.value);
        };
        if (event.target.id=="c") {
            setNewCol(event.target.value);
        }
    }

    function submitKanji() {
        let temp ={q: newQ, a:newA, c:newC};
        addKanji(temp);
    }

    return(
        <>
        <label>Q: </label>
        <input id="q" value={newQ} onChange={changeGeneric} type="text" />
        <label>A: </label>
        <input id="a" value={newA} onChange={changeGeneric} type="text" />
        <label>C: </label>
        <input id="c" value={newC} onChange={changeGeneric} type="text" />
        <button onClick={submitKanji} value={newQ}>add</button>
        </>
    )
}

export default Create;