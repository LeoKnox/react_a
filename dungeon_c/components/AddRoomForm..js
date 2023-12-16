import React, { useState } from "react";

const AddRoomForm = (props) => {
  const buildRoom = {
    id: null,
    name: "",
    description: "",
    width: 0,
    length: 0,
  };
  const [room, setRoom] = useState(buildRoom);
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={buildRoom.name} />
      <input type="text" name="description" value={buildRoom.description} />
      <input type="number" name="width" value={buildRoom.width} />
      <input type="number" name="length" value={buildRoom.length} />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddRoomForm;
