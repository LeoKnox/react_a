import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [roomObj, setRoomObj] = useState({ name: "" });
  //console.log(JSON.stringify(myRooms));
  const setRoom = (e) => {
    const room = "room";
    console.log(e.target.name);
  };
  return (
    <>
      <h1>Rooms</h1>
      <p>{roomObj["name"]}-</p>
      {myRooms.map((room) => {
        return (
          <>
            <p>
              {room["name"]}
              <button onClick={() => deleteRoom(room["id"])}>delete</button>
            </p>
          </>
        );
      })}
      <input
        type="text"
        name="name"
        value={roomName["name"]}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={(roomName) => addRoom(roomName)}>click</button>
      <button onClick={(e) => (setRoomObj(roomObj["room"]) = e.target.value)}>
        set room
      </button>
    </>
  );
};
