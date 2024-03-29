import './App.css';
import {useEffect, useState, useReducer} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";
import DataUpdate from "./components/DataUpdate";
import Data from './main/Data';
import Quiz from './quiz/Quiz';
import CreateQuiz from './quiz/CreateQuiz';
import DisplayQuiz from './quiz/DisplayQuiz';
import Test from "./test";

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
  const [a, setA] = useState([]);
  const [quiz, setQuiz] = useState(quizData.sort(() => Math.random() - Math.random()).slice(0, 4));
  const [newQuiz, setNewQuiz] = useState(quiz[Math.floor(Math.random()*quiz.length)]);
  const [data, setData] = useState(
    [
      {room: 'Entry', width:5, height:5},
      {room: 'Blue', width:4, height:6},
      {room: 'Red', width:8, height:7},
    ]
  )
  const aData = [11,22];

  useEffect((event) => {
    //event.preventDefault();
    setA(aData)
    getQuiz();
    setQdOne(quizData)
  }, [qdOne.c])

function getQuiz(e) {
  //e.preventDeafult();
  let x = qdOne.sort(() => Math.random() - Math.random()).slice(0, 4);
  setQuiz(x);
}

function addQuiz(pushQuiz) {
  let x = qdOne;
  x.push(pushQuiz);
  setQdOne(x);
};

function removeQuiz(event) {
  console.log("removeIndex");
  console.log(JSON.stringify(qdOne));
  let newQd = qdOne;
  newQd.splice(event.target.value, 1);
  console.log("spliced");
  console.log(newQd);
  //console.log(event.target.value);
  //delete newQd[event.target.value];
  console.log("newQd"+JSON.stringify(newQd));
  setQdOne(newQd); 
};

  return (
    <div className="App">
      <h1>Heading</h1>
      <Quiz questions={quiz} quizData={quizData} getQuiz={getQuiz} />
      <CreateQuiz addQuiz={addQuiz} getQuiz={getQuiz} quizData={quizData} />
      {qdOne.map((qd, i) => (
        <p>{qd.a}:{qd.q}::{qd.c}
          <button value={i} onClick={removeQuiz}>
            Del
          </button>
        </p>
      ))}
      <Data />
      <BrowserRouter>
        <Routes>
          <Route path="display" element={<DisplayQuiz quizes={qdOne} removeQuiz={removeQuiz} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
