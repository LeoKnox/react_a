import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [roomObj, setRoomObj] = useState({});
  //console.log(JSON.stringify(myRooms));
  const setRoom = (e) => {
    const room = "room";
    console.log(e.target.value);
  };
  return (
    <>
      <h1>Rooms</h1>
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
      <button onClick={(e) => setRoom(e)}>set room</button>
    </>
  );
};