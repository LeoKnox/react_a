import { useState } from "react";
import "./styles.css";
import Home from "./components/Home.js";
import Room from "./components/Room.js";
import { displayAll } from "./components/roomData.js";

export default function App() {
  const [currPage, setCurrPage] = useState(<Home />);

  return (
    <div className="App">
      <h1>Build Dungeons</h1>
      <div className="nav">
        <button onClick={() => setCurrPage(<Home />)}>Home</button>
        <button onClick={() => setCurrPage(<Room />)}>Room</button>
      </div>
      {currPage}
      {displayAll().dungeon}
    </div>
  );
}
