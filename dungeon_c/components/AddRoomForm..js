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
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + ":" + value);
    setRoom({ ...room, [name]: value });
  };
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onClick={handleChange}
        value={buildRoom[0].name}
      />
      <label>Description</label>
      <input type="text" name="description" value={room.description} />
      <br />
      <label>Width</label>
      <input type="number" name="width" value={buildRoom.width} />
      <label>Length</label>
      <input type="number" name="length" value={buildRoom.length} />
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddRoomForm;
