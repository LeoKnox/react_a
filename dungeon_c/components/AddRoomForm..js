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
  const submitRoom = (e) => {
    cosnole.log("submitted");
  };
  const increaseSize = (e) => {
    const { name, value } = e.target;
    let newValue = parseInt(value) + 1;
    console.log(name + ":" + newValue);
    setRoom({ ...room, [name]: newValue });
  };
  const handleChange = (e) => {
    const { name, evalue } = e.target;
    //console.log(name + ":" + evalue);
    setRoom({ ...room, [name]: evalue });
  };
  return (
    <form onSubmit={submitRoom}>
      <label>Name</label>
      <input type="text" name="name" onClick={handleChange} value={room.name} />
      <label>Description</label>
      <input
        type="text"
        name="description"
        onClick={handleChange}
        value={room.description}
      />
      <br />
      <label>Width</label>
      <input
        type="number"
        name="width"
        onClick={increaseSize}
        value={room.width}
      />
      <label>Length</label>
      <input type="number" name="length" value={room.length} />
      <br />
      <input type="submit" value="Create" />
    </form>
  );
};

export default AddRoomForm;
