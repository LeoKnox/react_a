import './App.css';
import {useState} from 'react';

function App() {
  const [a, setA] = useState([1,2]);
  
  function clickButton() {
    console.log("dddd");
    let newA = a;
    newA[1] = 9;
    setA(newA);
    console.log("***"+a);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        <button onClick={clickButton}>click</button>
        {a.map((letter) => (
          <p>{letter}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
