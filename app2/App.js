import './App.css';
import {useEffect, useState} from 'react';
import Abc from './Abc.js';

function App() {
  const [a, setA] = useState([]);
  const data = [1,2];

  useEffect(() => {
  },[]);
  
  function clickButton() {
    console.log("dddd");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        <Abc />
      </header>
    </div>
  );
}

export default App;
