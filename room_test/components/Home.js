import { memo, useState } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [roomObj, setRoomObj] = useState({});
  //const [roomObj, setRoomObj] = useState({ name: "" });
  const [view, setView] = useState(false);
  const updateRoom = (e) => {
    const { name, value } = e.target;
    console.log(`name ${name}`);
    setRoomObj((item) => ({
      ...item,
      ...item.roomObj,
      [name]: value,
    }));
  };
  const setRoom = () => {
    console.log(`roomObj ${JSON.stringify(typeof roomObj)}`);
    addRoom(roomObj);
    //const empty = new Map(Object.roomObj);
    let empty = {};
    //empty.delete("name");
    //empty["name"] = "";
    console.log(empty["name"]);
    setRoomObj({ name: "!", length: 0, width: 0 });
    console.log("empty room " + roomObj["name"]);
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
          value={roomObj["name"]}
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
      <button onClick={(roomName) => addRoom(roomName)}>click</button>
      <button onClick={setRoom}>set room</button>
    </>
  );
};
