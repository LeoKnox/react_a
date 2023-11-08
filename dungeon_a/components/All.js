import {useState, useCallback} from 'react';
import {allRooms, addRoom} from './dungeonData.js';

const All = ({setRoom}) => {
  let rooms = allRooms();
  const [currValue, setCurrValue] = useState()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [newRoom, setNewRoom] = useState()
  const newName = useCallback()
  function changeValue(e) {
    let value = e.target.value;
    console.log(value)
    setRoom(value)
  }
  function submitRoom() {
    //e.prevent.default;
    console.log("submit room")
    //console.log({name})
    let tempRoom = {
      name: name,
      description: description,
      width: width,
      length: length
    };
    //setNewRoom(tempRoom)
    alert(JSON.stringify(tempRoom))
    console.log("ora");
    rooms = addRoom({tempRoom})
    //console.log(addRoom(tempRoom))
    alert("blue")
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
        <div>
          <form onSubmit={submitRoom}>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
          <input type="number" name="width" value={width} onChange={e => setWidth(e.target.value)} />
          <input type="number" name="length" value={length} onChange={e => setLength(e.target.value)} />
          <button type="submit">create</button>
          </form>
        </div>
      </table>
    </div>
  );
};

export default All;
