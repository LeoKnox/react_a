import {allRooms} from './dungeonData.js';

const All = () => {
  let dungeon = allRooms();
  function showRoom(roomId = 1) {
    //alert("red");
    console.log("red "+roomId)
  }
  return (
    <div>
      <h1>Dungeon</h1>
      <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Width</th>
        <th>Length</th>
      </tr>
      {dungeon.map(room => (
        <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
          <td><button onClick={() => showRoom(room.id)}>Show</button></td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default All;
