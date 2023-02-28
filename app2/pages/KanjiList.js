import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import One from './One.js';

function KanjiList() {
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
    ];

    useEffect((event) => {
    }, [])

    return (
        <>
        <p>List of Kanji</p>
        <Outlet />
        {}
        </>
    )
}

export default KanjiList;