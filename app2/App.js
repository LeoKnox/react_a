import './App.css';
import {useEffect, useState, useReducer} from 'react';
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";
import DataUpdate from "./components/DataUpdate";
import Data from './main/Data';
import Quiz from './quiz/Quiz';
import Test from "./test";

function App() {
  const [a, setA] = useState([]);
  const [quiz, setQuiz] = useState(
    [
      {q: "one", a:1, c:"red"},
      {q: "two", a:2, c:"orange"},
      {q: "three", a:3, c:"yellow"},
      {q: "four", a:4, c:"green"},
      {q: "five", a:5, c:"blue"},
      {q: "six", a:6, c:"indigo"},
      {q: "seven", a:7, c:"violet"}
    ]
  );
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
  }, [])

  return (
    <div className="App">
      <h1>Heading</h1>
      <Quiz questions={quiz} />
      <Data />
    </div>
  )
}

export default App;
