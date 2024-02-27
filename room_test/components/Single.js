import { useState, useEffect } from "react";
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
  setErrorList,
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
  const [nameError, setNameError] = useState(false);
  const [addMonster, setAddMonster] = useState(false);
  const [minRoomX, setMinRoomX] = useState();
  const [minRoomY, setMinRoomY] = useState();
  useEffect(() => {
    if (newRoom["monsters"].length === 0) {
      setMinRoomX(0);
      setMinRoomY(0);
    } else {
      setMinRoomX(
        newRoom["monsters"].reduce((prev, current) =>
          prev && prev["x"] > current["x"] ? prev : current
        )["x"]
      );
      setMinRoomY(
        newRoom["monsters"].reduce((prev, current) =>
          prev && prev["y"] > current["y"] ? prev : current
        )["y"]
      );
    }
  }, [pushMonster]);
  const changeValue = (e) => {
    const { name, value } = e.target;
    setNewRoom((item) => ({
      ...item,
      ...item.newRoom,
      [name]: value,
    }));
  };
  const changeRoom = () => {
    if (
      newRoom["width"] > 0 &&
      newRoom["length"] > 0 &&
      newRoom["name"].length > 2
    ) {
      updateRoom(newRoom);
      setIsEdit(false);
      setSizeError(false);
      setNameError(false);
    } else {
      if (newRoom["name"].length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (newRoom["length"] < 1 || newRoom["width"] < 1) {
        setSizeError(true);
      } else {
        setSizeError(false);
      }
    }
  };
  const resetRoom = () => {
    setNewRoom(room);
  };
  return (
    <>
      <h3>Single Room</h3>
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
                min={newMonster["x"] < minRoomX ? minRoomX : newMonster["x"]}
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
                min={newMonster["y"] < minRoomY ? minRoomY : newMonster["y"]}
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
        {/* <button onClick={() => setAddMonster(!addMonster)}>Add Monster</button> */}
        <button onClick={() => pushMonster(newMonster, roomId)}>
          Push Monster
        </button>
        {isEdit ? (
          <p>
            <button onClick={resetRoom}>Reset</button>
            <button onClick={changeRoom}>Update</button>
          </p>
        ) : null}
      </p>
      {sizeError ? (
        <p className="error">
          Rooms must be length and width must be at least 1
        </p>
      ) : null}
      {nameError ? (
        <p className="error">Room name must be at least 3 characters</p>
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
        setErrorList={setErrorList}
      />
    </>
  );
};
