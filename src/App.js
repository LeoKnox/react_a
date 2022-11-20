import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
  const [a, setA] = useState(a=[1,2])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>import {useState} from 'react';
        
        {a.map((letter) => (
          <p>{letter}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
