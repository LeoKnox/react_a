import './App.css';
import {useEffect, useState, useReducer} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KanjiList from "./pages/KanjiList";
import Home from "./pages/Home";
import One from "./pages/One";
import Update from "./pages/Update";
import Create from "./pages/Create";
import {displayKanji} from "./kanjiQuiz/kanji";

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
  const [qdOne, setQdOne] = useState(quizData);
  const [quiz, setQuiz] = useState(quizData.sort(() => Math.random() - Math.random()).slice(0, 4));
  /*
          <Route path="/update/:kanjiId/" element={<Update />} />
          <Route path="/kanji" element={<KanjiList homeKanji={quizData} />}>
            <Route path="create/" element={<Create />} />
          </Route>
  */

  useEffect((event) => {
    let x = displayKanji();
    console.log(x);
  }, [])

  return (
    <div className="App">
      <h1>Heading</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
