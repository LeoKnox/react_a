import {useEffect, useState, useLoaderData} from 'react';
import {Link} from 'react-router-dom';
import One from './One.js';
import Create from './Create.js';

function KanjiList({homeKanji}) {
    console.log("homeKanji");
    console.log(JSON.stringify(homeKanji))
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
    const [listKanji, setListKanji] = useState(homeKanji);
    const [listKanji2, setListKanji2] = useState(
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

    //console.log("tt" + useLoaderData());

    function deleteKanji(event) {
        setListKanji(listKanji.filter((value, i) => i != event.target.value));
    }

    function addKanji(newKanji) {
        const temp = [
            ...listKanji, newKanji
            //...listKanji, {q:newQ, a:newA, c:newC}
        ];
        setListKanji(temp);
    }
    //<a href={`/update/${i}/`}>Update</a>
    export function test() {
        console.log("sucessful test");
    }

    return (
        <>
        <p>List of Kanji</p>
        {listKanji.map((lk, i) => (
            <p>{lk.q}<button value={i} onClick={deleteKanji}>X</button><button><Link to={`/update/${i}`}>Update</Link></button></p>
        ))}
        <Create addKanji={addKanji} />
        </>
    )
}

export default KanjiList;