import {useState, useCallback, createContext} from 'react';
import {redContext, allRooms, addRoom, deleteRoom, redRoom} from './dungeonData.js';

const All = ({setRoom}) => {
  let rooms = allRooms();
  console.log("context "+JSON.stringify({redContext}))
  const [currValue, setCurrValue] = useState()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [newRoom, setNewRoom] = useState()
  const thisRoom = createContext
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
    alert("submit room")
    rooms = addRoom({tempRoom})
    //console.log(addRoom(tempRoom))
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
            <button onClick={() => deleteRoom(room.id)}>Delete</button>
            <button onClick={redRoom}>Edit</button>
          </td>
        </tr>
      ))}
        <div>
          {/* <form onSubmit={submitRoom}> */}
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
          <input type="number" name="width" value={width} onChange={e => setWidth(e.target.value)} />
          <input type="number" name="length" value={length} onChange={e => setLength(e.target.value)} />
          <button onClick={submitRoom}>create</button>
          {/*</form>*/}
        </div>
      </table>
    </div>
  );
};

export default All;
