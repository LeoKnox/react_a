import { useState } from "react";
import "./DrawRoom.js";

export default Single = ({
  roomId,
  room,
  setRoomId,
  updateRoom,
  pushMonster,
  newMonster,
  setNewMonster,
  errorList,
}) => {
  const dataStyle = {
    backgroundColor: "lightblue",
    height: "8em",
    padding: "1em",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1em",
  };
  const inputStyle = {
    width: "3em",
  };
  const [newRoom, setNewRoom] = useState(room);
  const [isEdit, setIsEdit] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [addMonster, setAddMonster] = useState(false);
  /*
  const [newMonster, setNewMonster] = useState({
    monsterName: "Mon",
    x: 3,
    y: 4,
  });*/
  const changeValue = (e) => {
    const { name, value } = e.target;
    setNewRoom((item) => ({
      ...item,
      ...item.newRoom,
      [name]: value,
    }));
  };
  const changeRoom = () => {
    if (newRoom["width"] > 1 && newRoom["length"] > 1) {
      updateRoom(newRoom);
      setIsEdit(false);
      setSizeError(false);
    } else {
      setSizeError(true);
    }
  };
  const resetRoom = () => {
    console.log(`reset room ${room.name}`);
    setNewRoom(room);
  };
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setRoomId(-1)}>Home</button>
      <div style={dataStyle}>
        {isEdit ? (
          <p>
            Name:&nbsp;
            <input
              type="text"
              name="name"
              autoFocus
              value={newRoom["name"]}
              onChange={changeValue}
            />
          </p>
        ) : (
          <p>{room["name"]}</p>
        )}
        <p>
          {isEdit ? (
            <>
              Description:{" "}
              <input
                type="text"
                name="description"
                value={newRoom["description"]}
                onChange={changeValue}
              />
            </>
          ) : (
            <>Description: {room["description"]}</>
          )}
        </p>
        <p>
          {isEdit ? (
            <>
              Width:{" "}
              <input
                style={inputStyle}
                type="number"
                name="width"
                value={newRoom["width"]}
                min={newMonster["x"]}
                onChange={changeValue}
              />
            </>
          ) : (
            <>Width: {room["width"]}</>
          )}{" "}
          {isEdit ? (
            <>
              Length:{" "}
              <input
                style={inputStyle}
                type="number"
                name="length"
                value={newRoom["length"]}
                min={newMonster["y"]}
                onChange={changeValue}
              />
            </>
          ) : (
            <>Length: {room["length"]}</>
          )}
        </p>
      </div>
      <p>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
        <button onClick={() => setAddMonster(!addMonster)}>Add Monster</button>
        <button onClick={() => pushMonster(newMonster, roomId)}>Push</button>
        {isEdit ? (
          <p>
            <button onClick={resetRoom}>Reset</button>
            <button onClick={changeRoom}>Update</button>
          </p>
        ) : null}
      </p>
      {sizeError ? (
        <p className="error">
          Rooms must be length and width must be greater then 1
        </p>
      ) : null}
      <DrawRoom
        width={newRoom["width"]}
        length={newRoom["length"]}
        addMonster={addMonster}
        setAddMonster={setAddMonster}
        newMonster={newMonster}
        setNewMonster={setNewMonster}
        monsters={room["monsters"]}
        errorList={errorList}
      />
    </>
  );
};
