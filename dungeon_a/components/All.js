import {useState} from 'react';
import {allRooms} from './dungeonData.js';

const All = ({setRoom}) => {
  let rooms = allRooms();
  const [currValue, setCurrValue] = useState()
  const [newRoom, setNewRoom] = useState({name:"red",description:"",width:"",length:""})
  function changeValue(e) {
    let value = e.target.value;
    console.log(value)
    setRoom(value)
  }
  function submitRoom() {
    console.log("submit room")
    console.log(newRoom)
  }
  function changeRoom(event) {
    let tempRoom = newRoom;
    console.log(tempRoom)
    tempRoom[event.target.name] = event.target.value
    setNewRoom(tempRoom)
    console.log(newRoom)
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
          <td><input type="text" name="name" value={newRoom.name} onChange={(e) => setNewRoom[e.target.name](e.target.value)} /></td>
          <td><input type="text" name="description" value={newRoom.description} onChange={changeRoom} /></td>
          <td><input type="number" name="width" value={newRoom.width} onChange={changeRoom} /></td>
          <td><input type="number" name="length" value={newRoom.length} onChange={changeRoom} /></td>
          <td>
            <buttton onClick={submitRoom}>Create</buttton>
          </td>
      </tr>
      </table>
    </div>
  );
};

export default All;
