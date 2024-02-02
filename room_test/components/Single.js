import { useState } from "react";

export default Single = ({ roomId, room, setRoomId, updateRoom }) => {
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
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setRoomId(-1)}>Home</button>
      {isEdit ? (
        <p>
          <input
            type="text"
            name="name"
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
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={changeRoom}>Update</button>
    </>
  );
};
