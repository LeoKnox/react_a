import './App.css';
import {useEffect, useState} from 'react';
import Abc from './Abc.js';

function App() {
  const [a, setA] = useState([]);
  const data = [1,2];

  useEffect(() => {
    setA(data);
  },[a]);
  
  const clickButton = () => {
    console.log("dddd");
    let newData = a;
    newData[1] += 1;
    setA(newData);
    console.log(a);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        <button onClick={clickButton}>click</button>
        <Abc a={a}/>
      </header>
    </div>
  );
}

export default App;
