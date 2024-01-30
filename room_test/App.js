import "./styles.css";
import "./components/Home.js";
import "./components/Single.js";
import { useState } from "react";

export default function App() {
  const [roomId, setRoomId] = useState(2);
  const [myRooms, setMyRooms] = useState([
    { id: 0, name: "entry", width: 5, length: 5 },
    { id: 1, name: "store", width: 8, length: 6 },
    { id: 2, name: "guard", width: 6, length: 7 },
  ]);
  const addRoom = (roomName) => {
    console.log(`room name ${JSON.stringify(roomName)}`);
    const newId = myRooms[myRooms.length - 1]["id"] + 1;
    console.log(roomName);
    roomName["id"] = newId;
    setMyRooms((room) => [
      ...room,
      roomName,
      /*{ id: newId, name: roomName, width: 1, length: 1 },*/
    ]);
  };
  const deleteRoom = (id) => {
    setMyRooms(myRooms.filter((room) => room["id"] !== id));
    console.log(id);
  };
  return (
    <div className="App">
      <Home
        myRooms={myRooms}
        addRoom={addRoom}
        setRoomId={setRoomId}
        deleteRoom={(id) => deleteRoom(id)}
      />
      <Single roomId={roomId} room={myRooms[roomId]} />
    </div>
  );
}
