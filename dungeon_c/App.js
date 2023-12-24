import "./styles.css";
import { useState } from "react";
import Home from "./components/Home.js";
import roomsList from "./components/roomslist.js";
import Rooms from "./components/Rooms.js";
import AddRoomForm from "./components/AddRoomForm.js";

export default function App() {
  const [currRooms, setCurrRooms] = useState(roomsList);
  function addRoom(room) {
    console.log("!!!!!!! red");
    room.id = currRooms.length + 1;
    setCurrRooms([...currRooms, room]);
  }
  return (
    <div className="App">
      <h1>Dungeon Room</h1>
      <AddRoomForm addRoom={this.addRoom} />
      <Rooms rooms={currRooms} />
    </div>
  );
}
