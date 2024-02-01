import { useState } from "react";

export default Single = ({ roomId, room, setRoomId }) => {
  const [newRoom, setNewRoom] = useState(room);
  const [isEdit, setIsEdit] = useState(false);
  console.log(`New room ${JSON.stringify(newRoom)}`);
  const changeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => setRoomId(-1)}>Home</button>
      {isEdit ? (
        <p>
          <input type="text" value={newRoom["name"]} onChange={changeValue} />
        </p>
      ) : (
        <p>{room["name"]}</p>
      )}
      <p>
        Width:{room["width"]} Length:{room["length"]}
      </p>
    </>
  );
};
