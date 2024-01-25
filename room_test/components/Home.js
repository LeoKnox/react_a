import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [roomObj, setRoomObj] = useState({ name: "", length: 5 });
  const updateRoom = (e) => {
    const { name, value } = e.target;
    setRoomObj((item) => ({
      ...item,
      ...item.roomObj,
      [name]: value,
    }));
  };
  const setRoom = () => {
    console.log(`roomObj ${roomObj}`);
    addRoom(roomObj);
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
      <p>
        Name:
        <input
          type="text"
          name="name"
          value={roomName["name"]}
          /*onChange={(e) => setRoomName(e.target.value)}*/
          onChange={updateRoom}
        />
      </p>
      <p>
        Length:
        <input
          type="number"
          name="length"
          value={roomObj["length"]}
          onchange={updateRoom}
        />
      </p>
      <button onClick={(roomName) => addRoom(roomName)}>click</button>
      <button onClick={setRoom}>set room</button>
    </>
  );
};
