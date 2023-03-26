import {showKanji, addKanji, deleteKanji} from "./kanjiQuiz/kanji.js";
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
    }, [])

    function updateEntry(e) {
      if (e.target.name === "ans") {
        setA(e.target.value);
      }
      if (e.target.name === "ques") {
        setQ(e.target.value);
      }
      if (e.target.name === "id") {
        setId(e.target.value);
      }
    }

    function updateKanji() {
      let newKanji = {a:a, q:q, id:i};
      addKanji(newKanji);
      setSK(showKanji());
    }

    function removeKanji(e) {
      deleteKanji(e.target.value);
      setSK(showKanji());
    }

  return (
    <div className="App">
      <h1>Heading</h1>
      {sk.map ((tt, i) => (
        <p>{tt.a}<button value={tt.id} onClick={removeKanji}>X</button></p>
      ))}
      <p>
        <label>&nbsp;answer:</label>
        <input type="text" name="ans" value={a} onChange={updateEntry} />
        <label>&nbsp;question:</label>
        <input type="text" name="ques" value={q} onChange={updateEntry} />
        <label>&nbsp;id:</label>
        <input type="number" name="id" value={i} onChange={updateEntry} />
      </p>
      <button onClick={updateKanji}>Add</button>
    </div>
  )
}

export default App;
