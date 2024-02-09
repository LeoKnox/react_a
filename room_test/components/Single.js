import { useState } from "react";
import "./DrawRoom.js";

export default Single = ({ roomId, room, setRoomId, updateRoom }) => {
  const dataStyle = {
    backgroundColor: "lightblue",
    padding: ".5em",
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
  const changeValue = (e) => {
    const { name, value } = e.target;
    setNewRoom((item) => ({
      ...item,
      ...item.newRoom,
      [name]: value,
    }));
  };
  const changeRoom = () => {
    updateRoom(newRoom);
    setIsEdit(false);
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
        <button onClick={changeRoom}>Update</button>
        {isEdit ? (
          <p>
            <button onClick={resetRoom}>Reset</button>
          </p>
        ) : null}
      </p>
      <DrawRoom width={room["width"]} length={room["length"]} />
    </>
  );
};
