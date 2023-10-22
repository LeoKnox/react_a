import {useState} from 'react';
import {allRooms} from './dungeonData.js';

const All = ({setRoom}) => {
  let rooms = allRooms();
  const [currValue, setCurrValue] = useState()
  function changeValue(e) {
    let value = e.target.value;
    console.log(value)
    setRoom(value)
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
        <form>
          <td><label>a</label><input type="text" id="name"/></td>
        </form>
      </tr>
      </table>
    </div>
  );
};

export default All;
