import { useState } from "react";

export default Single = ({ roomId, room, setRoomId, updateRoom }) => {
  const [newRoom, setNewRoom] = useState(room);
  const [isEdit, setIsEdit] = useState(false);
  console.log(`New room ${JSON.stringify(newRoom)}`);
  const changeValue = (e) => {
    const { name, value } = e.target;
    console.log(`name ${name}`);
    setNewRoom((item) => ({
      ...item,
      ...item.newRoom,
      [name]: value,
    }));
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
        Width:{room["width"]} Length:{room["length"]}
      </p>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => updateRoom(newRoom)}>Update</button>
    </>
  );
};
