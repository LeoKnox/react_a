import "./styles.css";
import "./components/Home.js";
import { useState } from "react";

export default function App() {
  const [myRooms, setMyRooms] = useState([
    { name: "entry", width: 5, length: 5 },
    { name: "store", width: 8, length: 6 },
    { name: "guard", width: 6, length: 7 },
  ]);
  const addRoom = () => {
    setMyRooms((room) => [...room, { name: "new room", width: 1, length: 1 }]);
  };
  return (
    <div className="App">
      <Home myRooms={myRooms} addRoom={addRoom} />
    </div>
  );
}
