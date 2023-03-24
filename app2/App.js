import {showKanji, displayKanji, addKanji} from "./kanjiQuiz/kanji.js";
import {useEffect, useState} from "react";

function App() {
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
    const [sk, setSK] = useState([]);
    const [a, setA] = useState("");
    const [q, setQ] = useState("");
    const [i, setId] = useState();

    useEffect(() => {
      setSK(showKanji());
      console.log("sk");
      console.log(sk);
    }, [a])

    console.log(showKanji());
    console.log(displayKanji());

    function updateNew(e) {
      if (e.target.name === "a") {
        setA(e.target.value);
      }
      if (e.target.name === "q") {
        setQ(e.target.value);
      }
      if (e.target.name === "a") {
        setId(e.target.value);
      }
    }

    function updateKanji() {
      let newKanji = {a:a, q:q, id:i};
      addKanji(newKanji);
      setSK(showKanji());
    }

  return (
    <div className="App">
      <h1>Heading</h1>
      {sk.map ((tt) => (
        <p>{tt.a}</p>
      ))}
      <p>
        <input type="text" name="ans" value={a} onChange={updateNew} />
        <input type="text" name="ques" value={q} onChange={updateNew} />
        <input type="number" name="id" value={i} onChange={updateNew} />
      </p>
      <button onClick={updateKanji}>Add</button>
    </div>
  )
}

export default App;
