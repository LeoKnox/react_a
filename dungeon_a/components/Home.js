import {allRooms} from './dungeonData.js';

const Home = () => {
  let dungeon = allRooms();
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
        </tr>
      ))}
      </table>
    </div>
  )
}

export default Home;
