import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("");
  console.log(JSON.stringify(myRooms));
  const setRoom = () => {};
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
    </>
  );
};
