import { useState } from 'react';
import "./styles.css";
import Home from './components/Home.js';
import Room from './components/Room.js';
import Nav from './components/Nav.js';

export default function App() {
  const [currPage, setCurrPage] = useState(<Home />)

  function changePage(x) {
    setCurrPage(x)
  }

  return (
    <div className="App">
      <h1>Build Dungeons</h1>
      <button onClick={()=>setCurrPage(<Home />)}>Home</button>
      <button onClick={()=>setCurrPage(<Room />)}>Room</button>
      <div className="nav">
      </div>
      {currPage}
    </div>
  );
}
