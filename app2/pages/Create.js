import {useEffect, useState} from 'react';

function Create({addKanji}) {
    const [newQ, setNewQuiz] = useState({q:"type here", a:"ans here"});
    const [newA, setNewAns] = useState("type here");
    const [newZ, setNewZ] = useState("");
    const [newC, setNewCol] = useState("type here");
    const [generic, setGeneric] = useState({z:"", q:""});

    function changeGeneric(event) {
        let temp=generic;
        console.log('t');
        console.log(temp);
        if (event.target.id=="z") {
            setNewZ(event.target.value);
            console.log(temp);
            temp.q = temp.q;
        };
        if (event.target.id=="q") {
            temp.q = event.target.value;
        };
        setGeneric(temp);
        console.log(generic);
    }

    function submitKanji() {
        console.log("gg");
        let temp ={z: newZ, q:"qq", a:"aa", c:"cc"};
        console.log(temp);
        addKanji(temp);
    }

    return(
        <>
        <input id="z" value={newZ} onChange={changeGeneric} type="text" />
        <input id="q" value={generic.q} onChange={changeGeneric} type="text" />
        <input value={newQ.a} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={submitKanji} value={newQ}>add</button>
        </>
    )
}

export default Create;