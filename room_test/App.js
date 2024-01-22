import "./styles.css";
import "./components/Home.js";
import { useState } from "react";

export default function App() {
  const [myRooms, setMyRooms] = useState([
    { id: 0, name: "entry", width: 5, length: 5 },
    { id: 1, name: "store", width: 8, length: 6 },
    { id: 2, name: "guard", width: 6, length: 7 },
  ]);
  const addRoom = () => {
    const newId = myRooms.length;
    console.log(newId);
    setMyRooms((room) => [
      ...room,
      { id: newId, name: "new room", width: 1, length: 1 },
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
        deleteRoom={(id) => deleteRoom(id)}
      />
    </div>
  );
}
