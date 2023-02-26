import './App.css';
import {useEffect, useState, useReducer} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KanjiList from "./pages/KanjiList";

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

  useEffect((event) => {
  }, [])

  return (
    <div className="App">
      <h1>Heading</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<KanjiList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
