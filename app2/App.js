import './App.css';
import {useEffect, useState, useReducer} from 'react';
import Abc from './Abc.js';

function App() {
  //const [a, setA] = useState([]); before use reducer
  const [b, setB] = useState(1);
  const data = [1,2];

  const reducer = (state, action) => {
    console.log("state:"+state+":"+"action:"+action);
    if (action.type === 1) {
      (data = data + 1)
    }
  } 

  const [state, dispatch] = useReducer(reducer, [1,2]);

  useEffect(() => {
    dispatch(data);
  },[]);

  const clickB = () => {
    console.log("Bbb");
    setB(b+1);
  }

  const textInput = (index, aaa) => {
    console.log(index+":"+aaa);
    let next = data;
    dispatch([next.map(i=>{
      if (i === aaa) {
        next[i] = next[i]+1;
        console.log("equals:"+i+":"+index);
      }
      console.log("next"+next)
      dispatch(next);
    })]);
        /*
    let newA = a.map((b) => {
      b += 2
    });
    console.log(newA);
    setA(newA);
    setA(
      [...a, a.filter((item) => item === aaa ? item+=1 : item=item)]
      aaa => {
      return [
        ...aaa.slice(0, ti[0]),
        aaa.push(ti[1]),
        ...aaa.slice(ti[0]+1),
       console.log(`aaa:${aaa} : ti0:${ti[0]} : ti1:${ti[1]}`)
      ]
    }
    )
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
   setA(aaa => {
     return [
       ...aaa.slice(0, index),
       aaa[index] + 1,
       ...aaa.slice(index+1),
     ]
   })
    console.log(a+"end");
    */
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        {data.map((aaa, index) => (
          <>
          <p key={index} >{aaa}x {index} <button onClick={() => clickButton(index)}>click</button></p>
          <p><input type="number" value={aaa} onChange={() => textInput(index, aaa)} />{aaa}</p>
          </>
        ))}
        <p>B: {b} <button onClick={clickB}>BBB</button></p>
      </header>
    </div>
  );
}

export default App;
