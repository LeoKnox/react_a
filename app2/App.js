import './App.css';
import {useEffect, useState, useReducer} from 'react';
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";
import DataUpdate from "./components/DataUpdate";
import Data from './main/Data';
import Quiz from './quiz/Quiz';
import CreateQuiz from './quiz/CreateQuiz';
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
      {q: "nana", a:7, c:"violet"}
    ];
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

  useEffect(() => {
    setA(aData)
    getQuiz();
  }, [])

function getQuiz(e) {
  //e.preventDeafult();
  let x = quizData.sort(() => Math.random() - Math.random()).slice(0, 4);
  console.log("x:");
  console.log(x);
  setQuiz(x);
  //setQuiz(quiz.sort(() => Math.random() - Math.random()).slice(0, 4));
}

function addQuiz(pushQuiz) {
  console.log("adding quiz!!!!!"+JSON.stringify(pushQuiz));
  let x = quiz;
  x.push({a:pushQuiz});
  quizData.push(pushQuiz);
  setQuiz(x);
  console.log("last"+JSON.stringify(quiz));
}

  return (
    <div className="App">
      <h1>Heading</h1>
      <Quiz questions={quiz} quizData={quizData} getQuiz={getQuiz} />
      <CreateQuiz addQuiz={addQuiz} getQuiz={getQuiz} quiData={quizData} />
      {quizData.map((qd) => (
        <p>{qd.a}:{qd.q}::{qd.c}</p>
      ))}
      <Data />
    </div>
  )
}

export default App;
