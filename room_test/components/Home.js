import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("d");
  console.log(JSON.stringify(myRooms));
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
      <input type="text" name="name" value={roomName} />
      <button onClick={addRoom}>click</button>
    </>
  );
};
