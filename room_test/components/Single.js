import { useState } from "react";

export default Single = ({ roomId, room, setRoomId }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => setRoomId(-1)}>Home</button>
      <p>{room["name"]}</p>
      <p>
        Width:{room["width"]} Length:{room["length"]}
      </p>
    </>
  );
};
