import "./styles.css";
import "./components/Home.js";
import "./components/Single.js";
import { useState, useContext, createContext } from "react";

export default function App() {
  const [roomId, setRoomId] = useState(-1);
  const [errorList, setErrorList] = useState({});
  const roomContext = createContext;
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
  const [newMonster, setNewMonster] = useState({
    monsterName: "",
    x: 0,
    y: 0,
  });
  const pushMonster = (newMonster, roomId = 0) => {
    if (newMonster["monsterName"].length <= 2) {
      setErrorList((errorList) => ({ ...errorList, monsterNameError: true }));
      return;
    }
    const tempRooms = myRooms.map((room) => {
      if (
        room["id"] === roomId &&
        newMonster["x"] > 0 &&
        newMonster["y"] > 0 &&
        newMonster["monsterName"].length > 2
      ) {
        room["monsters"].push(newMonster);
        setErrorList({ ...errorList, monsterNameError: undefined });
        return room;
      } else {
        return room;
      }
    });
    let temp = { monsterName: "", x: 0, y: 0 };
    setNewMonster(temp);
    console.log(`temp rooms ${tempRooms}`);
    setMyRooms(tempRooms);
  };
  const addRoom = (roomName) => {
    let newId = 0;
    myRooms.length
      ? (newId = myRooms[myRooms.length - 1]["id"] + 1)
      : (newId = 0);
    roomName["id"] = newId;
    roomName["monsters"] = [];
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
          newMonster={newMonster}
          setNewMonster={setNewMonster}
          errorList={errorList}
          setErrorList={setErrorList}
        />
      )}
    </div>
  );
}
