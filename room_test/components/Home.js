import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom, setRoomId }) => {
  const [roomObj, setRoomObj] = useState({});
  const updateRoom = (e) => {
    const { name, value } = e.target;
    setRoomObj((item) => ({
      ...item,
      ...item.roomObj,
      [name]: value,
    }));
  };
  const setRoom = () => {
    addRoom(roomObj);
    setRoomObj({ name: "", length: 0, width: 0 });
  };
  return (
    <>
      <h1>Rooms</h1>
      {myRooms.map((room) => {
        return (
          <>
            <p>
              <button onClick={() => setRoomId(room["id"])}>
                {room["name"]}
              </button>
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
          value={roomObj["name"]}
          onChange={updateRoom}
        />
      </p>
      <p>
        Length:
        <input
          type="number"
          name="length"
          value={roomObj["length"]}
          onChange={updateRoom}
        />
      </p>
      <p>
        Width:
        <input
          type="number"
          name="width"
          value={roomObj["width"]}
          onChange={updateRoom}
        />
      </p>
      <button onClick={setRoom}>set room</button>
    </>
  );
};
