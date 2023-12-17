import React, { useState } from "react";

const AddRoomForm = (props) => {
  const buildRoom = {
    id: null,
    name: "zzz",
    description: "",
    width: 0,
    length: 0,
  };
  const [room, setRoom] = useState(buildRoom);
  const handleChange = (e) => {
    const { name, evalue } = e.target;
    console.log(name + ":" + evalue);
    setRoom({ ...room, [name]: evalue });
  };
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" onClick={handleChange} value={room.name} />
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