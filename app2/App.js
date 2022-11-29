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

  const clickB = () => {
    console.log("Bbb");
    setB(b+1);
  }

  const textInput = (ti) => {
    console.log("Text input: " + ti);
    /*
    setA(aaa => {
      return [
        ...aaa.slice(0, index),
        aaa[index] + 1,
        ...aaa.slice(index+1),
      ]
    })
    */
  }
  
  const clickButton = (index) => {
    console.log("dddd" + Object.keys(index) + ":" + index);
    /*
    let newData = a;
    newData[1] = 5;
    setA(newData);
    console.log(a);
    setA((aa) => {
      console.log(aa+"aa");
      return [
        aa[0] += 1
        //aa[0]=5
      ]
    })
    */
        /*
    setA((aa) => {
      return (
        aa.map ((aaa) => {
          return (aaa+index)
        }
        )
    */
   setA(aaa => {
     return [
       ...aaa.slice(0, index),
       aaa[index] + 1,
       ...aaa.slice(index+1),
     ]
   })
    console.log(a+"end");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        {a.map((aaa, index) => (
          <>
          <p key={index} >{aaa}x {index} <button onClick={() => clickButton(index)}>click</button></p>
          <p><input value={aaa} onChange={() => textInput(aaa)} /></p>
          </>
        ))}
        <p>B: {b} <button onClick={clickB}>BBB</button></p>
      </header>
    </div>
  );
}

export default App;
