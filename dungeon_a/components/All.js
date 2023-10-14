import {allRooms} from './dungeonData.js';

const All = () => {
  let rooms = allRooms();
  return (
    <div>
      <h3>All</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Length</th>
        </tr>
      {rooms.map(room => (
        <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
        </tr>
      ))}
      </table>
    </div>
  );
};

export default All;
