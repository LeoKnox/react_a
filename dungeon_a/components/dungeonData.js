import {useState} from 'react';
import {allRooms, addRoom} from './dungeonData.js';

const All = ({setRoom}) => {
  let rooms = allRooms();
  const [currValue, setCurrValue] = useState()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [newRoom, setNewRoom] = useState()
  function changeValue(e) {
    let value = e.target.value;
    console.log(value)
    setRoom(value)
  }
  function submitRoom(event) {
    console.log("submit room")
    let tempRoom = {
      name: {event.target.value},
      description: {description},
      width: {width},
      length: {length}
    };
    setNewRoom(tempRoom)
    console.log(newRoom)
    addRoom(newRoom)
  }

  return (
    <div>
      <h3>All</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Length</th>
          <th>Action</th>
        </tr>
      {rooms.map(room => (
        <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
          <td>
            <button value={room.id} onClick={changeValue}>Room</button>
          </td>
        </tr>
      ))}
      <tr>
          <td><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
          <td><input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} /></td>
          <td><input type="number" name="width" value={width} onChange={e => setWidth(e.target.value)} /></td>
          <td><input type="number" name="length" value={length} onChange={e => setLength(e.target.value)} /></td>
          <td>
            <buttton onClick={event => submitRoom(event)}>Create</buttton>
          </td>
      </tr>
      </table>
    </div>
  );
};

export default All;
