import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom, setRoomId }) => {
  const [roomObj, setRoomObj] = useState({});
  const [homeErrorList, setHomeErrorLIst] = useState({});
  const updateRoom = (e) => {
    const { name, value } = e.target;
    setRoomObj((item) => ({
      ...item,
      ...item.roomObj,
      [name]: value,
    }));
  };
  const setRoom = () => {
    setHomeErrorList((shortName: false));
    if (roomObj["name"] && roomObj["name"].length <= 2) {
      console.log("room length 3");
      setHomeErrorList((error) => ({ ...error, shortName: true }));
    } else {
      setHomeErrorList((error) => ({
        ...error,
        shortName: undefined,
      }));
    }
    roomObj["length"] = +roomObj["length"];
    roomObj["width"] = +roomObj["width"];
    addRoom(roomObj);
    setRoomObj({ name: "", description: "", length: 0, width: 0 });
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
            <p>{room["description"]}</p>
          </>
        );
      })}
      <p>
        Name:
        <input
          type="text"
          name="name"
          autoFocus
          value={roomObj["name"]}
          onChange={updateRoom}
        />
      </p>
      <p>
        description:
        <input
          type="text"
          name="description"
          value={roomObj["description"]}
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
