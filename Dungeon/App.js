import { useState } from 'react';
import "./styles.css";
import Home from './components/Home.js';
import Nav from './components/Nav.js';

export default function App() {
  const [currPage, setCurrPage] = useState(<Home />)

  return (
    <div className="App">
      <h1>Build Dungeons</h1>
      <Nav changePage={setCurrPage} />
      {currPage}
      <p>1111</p>
    </div>
  );
}
