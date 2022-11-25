import './App.css';
import {useEffect, useState} from 'react';
import Abc from './Abc.js';

function App() {
  const [a, setA] = useState([]);
  const [b, setB] = useState(1);
  const data = [1,2];

  useEffect(() => {
    setA(data);
  },[]);
  
  const clickButton = () => {
    console.log("dddd");
    let newData = a;
    newData[1] = 5;
    setA(newData);
    console.log(a);
    return a;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        <button onClick={clickButton}>click</button>
        {a.map((aa) => (
          <p>{aa}x</p>
        ))}
        <p>B: {b}</p>
        <Abc a={a}/>
      </header>
    </div>
  );
}

export default App;
