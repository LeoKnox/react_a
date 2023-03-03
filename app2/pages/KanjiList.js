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

    function addKanji() {
        console.log("add kanji");
        let tempKanji = listKanji;
        console.log(typeof tempKanji);
        let d = {q: "ju", a:0, c:"ultrablack"};
        setListKanji(...tempKanji+d);
        console.log(typeof listKanji);
        //setListKanji(tempKanji);
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
        <button onClick={addKanji}>add</button>
        </>
    )
}

export default KanjiList;