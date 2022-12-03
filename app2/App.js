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

  const textInput = (ti, e) => {
    console.log(e.target.value+":"+ti);
    setA(
      [...a, a.filter((item) => item === ti[0] ? item+=1 : item=item)]
        /*
      aaa => {
      return [
        ...aaa.slice(0, ti[0]),
        aaa.push(ti[1]),
        ...aaa.slice(ti[0]+1),
       console.log(`aaa:${aaa} : ti0:${ti[0]} : ti1:${ti[1]}`)
      ]
    }
        */
    )
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
          <p><input type="number" value={aaa} onChange={({target: {value}}) => textInput([index, aaa])} />{aaa}</p>
          </>
        ))}
        <p>B: {b} <button onClick={clickB}>BBB</button></p>
      </header>
    </div>
  );
}

export default App;
