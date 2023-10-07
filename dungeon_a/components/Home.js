import {allRooms} from './dungeonData.js';

const Home = () => {
  let dungeon = allRooms();
  return (
    <div>
      <h1>Dungeon</h1>
      {dungeon.map(room => (
        <td>{room.name}</td>
      ))}
    </div>
  )
}

export default Home;
