import { useParams } from 'react-router-dom';
import { useState, useLoaderData } from 'react';
import { test } from './KanjiList.js';

function Update({oldKanji}) {
    export function Test() {
        console.log("sucessful test");
    }
    const { kanjiId, newId } = useParams();
    const {newQ, setQ} = useState("");
    const {newC, setC} = useState("");
    const {newA, setA} = useState("");
    console.log(oldKanji);

    return (
        <>
            <h3>update</h3>
            <button><a href={'/kanji/'}>Home</a></button>
            <br/>
            <label>Q:</label>
            <input id="q" value={newQ} />
            <label>C:</label>
            <input id="c" value={newC} />
            <label>A:</label>
            <input id="a" value={newA} />
        </>
    )
}

export default Update;