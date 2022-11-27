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
  
  const clickButton = (index) => {
    console.log("dddd" + index);
    //let newData = a;
    //newData[1] = 5;
    //setA(newData);
    console.log(a);
    /*
    setA((aa) => {
      console.log(aa+"aa");
      return [
        aa[0] += 1
        //aa[0]=5
      ]
    })*/
    setA((aa) => {
      return (
        aa.map ((aaa) => {
          return (aaa+1)
        }
        )
      )
    })
    console.log(a+"end");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        {a.map((aaa, i) => (
          <p key={i} >{aaa}x {i} <button onClick={clickButton}>click</button></p>
        ))}
        <p>B: {b} <button onClick={clickB}>BBB</button></p>
      </header>
    </div>
  );
}

export default App;
