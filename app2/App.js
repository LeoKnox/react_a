import './App.css';
import {useEffect, useState, useReducer} from 'react';
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";

function App() {
  const [a, setA] = useState([]);
  const [b, setB] = useState(1);
  const data = [11,22];

  useEffect(() => {
    setA(data)
  })

  return (
    <div className="App">
      <h1>Heading</h1>
      {a.map((aaa, index) => (
        <>
          <p>{aaa} : {index}</p>
        </>
      ))}
      <DataInput />
      <DataItem />
    </div>
  );
}

export default App;
