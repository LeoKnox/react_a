import {displayAll} from './roomData.js';

const Home = ({changePage}) => {
  alert({changePage})
  return (
    <div className="Home">
    <table>
        <tr>
          <th>Room Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Length</th>
        </tr>
      {displayAll().dungeon.map((room) => (
        <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
          <td>
            <button onClick={() => changePage()}>Map</button>
          </td>
        </tr>
      ))}
    </table>
    </div>
  )
}

export default Home;
