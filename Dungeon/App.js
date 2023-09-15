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
      <table>
        <tr>
          <th>Room Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Length</th>
        </tr>
      {displayAll().dungeon.map((room) => (
        <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
        </tr>
      ))}
      </table>
    </div>
  );
}
