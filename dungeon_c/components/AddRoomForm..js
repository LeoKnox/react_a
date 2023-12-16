import React, { useState } from "react";

const AddRoomForm = (props) => {
  const buildRoom = {
    id: null,
    name: "",
    description: "",
    height: 0,
    length: 0,
  };
  const [room, setRoom] = useState(buildRoom);
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="room.name" />
      <input type="text" name="description" value="room.description" />
      <input type="number" name="width" value="room.value" />
      <input type="number" name="length" value="room.length" />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddRoomForm;
