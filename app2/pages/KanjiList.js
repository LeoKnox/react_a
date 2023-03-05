import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import One from './One.js';

function KanjiList() {
    /*
  let quizData =
    [
      {q: "ichi", a:1, c:"red"},
      {q: "ni", a:2, c:"orange"},
      {q: "san", a:3, c:"yellow"},
      {q: "yon", a:4, c:"green"},
      {q: "go", a:5, c:"blue"},
      {q: "roku", a:6, c:"indigo"},
      {q: "nana", a:7, c:"violet"},
      {q: "hachi", a:8, c:"ultraviolet"},
      {q: "kyu", a:9, c:"ultraultraviolet"}
    ]; */

    let newData = {q: "JU", a:0, c:"ultrablack"};
    const [newQ, setNewQuiz] = useState("type here");
    const [newA, setNewAns] = useState("type here");
    const [newC, setNewCol] = useState("type here");
    const [listKanji, setListKanji] = useState(
    [
      {q: "ichi", a:1, c:"red"},
      {q: "ni", a:2, c:"orange"},
      {q: "san", a:3, c:"yellow"},
      {q: "yon", a:4, c:"green"},
      {q: "go", a:5, c:"blue"},
      {q: "roku", a:6, c:"indigo"},
      {q: "nana", a:7, c:"violet"},
      {q: "hachi", a:8, c:"ultraviolet"},
      {q: "kyu", a:9, c:"ultraultraviolet"}
    ]);

    function addKanji(event) {
        let d = event.target.value;
        console.log(d);
        const temp = [
            ...listKanji, {q:newQ, a:newA, c:newC}
        ];
        setListKanji(temp);
        /*
       let d = {q: "ju", a:0, c:"ultrablack"};
       setListKanji(
            [
            {q: "ichi", a:1, c:"red"},
            {q: "ni", a:2, c:"orange"},
            {q: "san", a:3, c:"yellow"},
            {q: "yon", a:4, c:"green"},
            {q: "go", a:5, c:"blue"},
            {q: "roku", a:6, c:"indigo"},
            {q: "nana", a:7, c:"violet"},
            {q: "hachi", a:8, c:"ultraviolet"},
            {q: "kyu", a:9, c:"ultraultraviolet"},
            d
            ]
       )
        */
       console.log(listKanji);
    }

    return (
        <>
        <p>List of Kanji</p>
        <Outlet />
        {listKanji.map((lk) => (
            <p>{lk.q}</p>
        ))}
        <input value={newQ} onChange={e => setNewQuiz(e.target.value)} type="text" />
        <input value={newA} onChange={e => setNewAns(e.target.value)} type="text" />
        <input value={newC} onChange={e => setNewCol(e.target.value)} type="text" />
        <button onClick={addKanji} value={newQ}>add</button>
        </>
    )
}

export default KanjiList;