import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState("");
    const [newA, setNewAns] = useState("");
    const [newC, setNewCol] = useState("");
    const [generic, setGeneric] = useState({z:"", q:""});

    function changeGeneric(event) {
        let temp=generic;
        console.log('t');
        console.log(temp);
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
        console.log("gg");
        let temp ={q: newQ, a:newA, c:newC};
        console.log(temp);
        addKanji(temp);
    }

    return(
        <>
        <input id="q" value={newQ} onChange={changeGeneric} type="text" />
        <input id="a" value={newA} onChange={changeGeneric} type="text" />
        <input id="c" value={newC} onChange={changeGeneric} type="text" />
        <button onClick={submitKanji} value={newQ}>add</button>
        </>
    )
}

export default Create;