import "./styles.css";
import "./components/Home.js";
import "./components/Single.js";
import { useState } from "react";

export default function App() {
  const [roomId, setRoomId] = useState(-1);
  const [myRooms, setMyRooms] = useState([
    {
      id: 0,
      name: "entry",
      description: "entrance",
      width: 5,
      length: 5,
      monsters: [{ monsterName: "ichi", x: 1, y: 1 }],
    },
  ]);
  const pushMonster = (param) => {
    console.log(`pushed monster ${param}`);
    let newRoom = { monsterName: "Ni", x: 2, y: 2 };
    const tempRooms = myRooms.map((room) => {
      if (room["id"] === 0) {
        console.log(`room monsters ${JSON.stringify(room["monsters"])}`);
        return room["monsters"].push(newRoom);
      } else {
        return room;
      }
    });
    console.log(`temp rooms ${tempRooms}`);
    setMyRooms(tempRooms);
  };
  const addRoom = (roomName) => {
    let newId = 0;
    myRooms.length
      ? (newId = myRooms[myRooms.length - 1]["id"] + 1)
      : (newId = 0);
    roomName["id"] = newId;
    setMyRooms((room) => [...room, roomName]);
  };
  const deleteRoom = (id) => {
    setMyRooms(myRooms.filter((room) => room["id"] !== id));
  };
  const updateRoom = (updatedRoom) => {
    const tempRoom = myRooms.map((room) => {
      if (roomId === room["id"]) {
        return updatedRoom;
      } else {
        return room;
      }
    });
    setMyRooms(tempRoom);
  };
  return (
    <div className="App">
      {roomId < 0 ? (
        <Home
          myRooms={myRooms}
          addRoom={addRoom}
          setRoomId={setRoomId}
          deleteRoom={(id) => deleteRoom(id)}
        />
      ) : (
        <Single
          roomId={roomId}
          room={myRooms[roomId]}
          setRoomId={setRoomId}
          updateRoom={updateRoom}
          pushMonster={pushMonster}
        />
      )}
    </div>
  );
}
