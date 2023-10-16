import {useState} from 'react';
import {allRooms} from './dungeonData.js';

const All = (setCurrRoom) => {
  let rooms = allRooms();
  const [currValue, setCurrValue] = useState()
  function changeValue(e) {
    let value = e.target.value;
    console.log(value)
    setCurrValue(value)
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
            <button value="red" onClick={changeValue}>Room</button>
          </td>
        </tr>
      ))}
      </table>
    </div>
  );
};

export default All;
