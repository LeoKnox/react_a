import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import One from './One.js';
import Create from './Create.js';
import Delete from './Delete.js';

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

    function deleteKanji(event) {
        let xKanji = [...listKanji.slice(event.target.value, ...listKanji.slice(event.target.value + 1))];
        console.log(xKanji);
    }

    function addKanji(event) {
        let d = event.target.value;
        console.log(d);
        const temp = [
            ...listKanji, {q:"asdfasd", a:"asdfasf", c:"dasfafda"}
            //...listKanji, {q:newQ, a:newA, c:newC}
        ];
        setListKanji(temp);
       console.log(listKanji);
    }

    return (
        <>
        <p>List of Kanji</p>
        {listKanji.map((lk, i) => (
            <p>{lk.q}<button value={i} onClick={deleteKanji}>X</button></p>
        ))}
        <Create addKanji={addKanji} />
        </>
    )
}

export default KanjiList;