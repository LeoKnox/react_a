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

    useEffect(() => {
      setSK(showKanji());
      console.log("sk");
      console.log(sk);
    }, [a])

    console.log(showKanji());
    console.log(displayKanji());

    function updateA(e) {
      setA(e.target.value);
    }

    function updateKanji() {
      addKanji({a:a});
      setSK(showKanji());
    }

  return (
    <div className="App">
      <h1>Heading</h1>
      {sk.map ((tt) => (
        <p>{tt.a}</p>
      ))}
      <p><input type="text" value={a} onChange={updateA} /></p>
      <button onClick={updateKanji}>Add</button>
    </div>
  )
}

export default App;
