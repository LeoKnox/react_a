import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import One from './One.js';
import Create from './Create.js';

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
        setListKanji(listKanji.filter((value, i) => i != event.target.value));
    }

    function addKanji2(param) {
        console.log(param);
    }

    function addKanji(newKanji) {
        console.log("addKanji");
        console.log(newKanji);
        const temp = [
            ...listKanji, newKanji
            //...listKanji, {q:newQ, a:newA, c:newC}
        ];
        console.log(temp);
        setListKanji(temp);
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