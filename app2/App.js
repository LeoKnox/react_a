import './App.css';
import {useEffect, useState, useReducer} from 'react';
import Abc from './Abc.js';

function App() {
  const [a, setA] = useState([]);
  const [b, setB] = useState(1);
  const data = [11,22];

  return (
    <div className="App">
      <h1>Heading</h1>
      {data.map((aaa, index) => (
        <>
          <p>{aaa} : {index}</p>
        </>
      ))}
    </div>
  );
}

export default App;
