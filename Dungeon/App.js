import { useState } from 'react';
import "./styles.css";
import Home from './components/Home.js';
import Room from './components/Room.js';
import Nav from './components/Nav.js';

export default function App() {
  const [currPage, setCurrPage] = useState(<Home />)

  function changePage() {
    setCurrPage(<Room />)
  }

  return (
    <div className="App">
      <h1>Build Dungeons</h1>
      <Nav changePage={changePage} />
      {currPage}
      <p>1111</p>
    </div>
  );
}
