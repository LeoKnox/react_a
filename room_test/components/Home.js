import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom, setRoomId }) => {
  const [roomObj, setRoomObj] = useState({});
  const [homeErrorList, setHomeErrorList] = useState({});
  const updateRoom = (e) => {
    const { name, value } = e.target;
    setRoomObj((item) => ({
      ...item,
      ...item.roomObj,
      [name]: value,
    }));
  };
  const setRoom = () => {
    let tempError = {};

    if (!roomObj["name"] || roomObj["name"].length < 3) {
      tempError["shortName"] = true;
      console.log("run name");
    }
    if (roomObj["length"] < 1) {
      tempError["lowLength"] = true;
      console.log("run length");
      /*setHomeErrorList({
        ...homeErrorList,
        lowLength: true,
      });*/
    }
    if (Object.keys(tempError).length < 1) {
      roomObj["length"] = +roomObj["length"];
      roomObj["width"] = +roomObj["width"];
      addRoom(roomObj);
      setRoomObj({ name: "", description: "", length: 0, width: 0 });
      setHomeErrorList({ ...homeErrorList, shortName: undefined });
    } else {
      /*setHomeErrorList({
        ...homeErrorList,
        shortName: "name must be 3 characters or longer",
      });*/
      setHomeErrorList(tempError);
    }
    console.log(`home err list ${JSON.stringify(homeErrorList)}`);
    console.log(Object.keys(tempError).length);
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
      {homeErrorList["shortName"] ? (
        <p>name must be 3 characters or longer</p>
      ) : null}
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
          value={roomObj["length"] ? roomObj["length"] : 1}
          onChange={updateRoom}
        />
      </p>
      {homeErrorList["lowLength"] ? <p>Length must be higher then 1</p> : null}
      <p>
        Width:
        <input
          type="number"
          name="width"
          value={roomObj["width"] ? roomObj["width"] : 1}
          onChange={updateRoom}
        />
      </p>
      {homeErrorList["lowWidth"] ? <p>Width must be higher then 1</p> : null}
      <p>
        <button onClick={setRoom}>set room</button>
      </p>
    </>
  );
};
