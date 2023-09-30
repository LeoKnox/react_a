import { displayAll, displayOne } from "./roomData.js";

const Home = ({ changePage }) => {
  const newPage = (x) => {
    alert("new page " + x)
    alert(typeof(changePage))
    changePage(x)
  }

  return (
    <div className="Home">
      <table>
        <tr>
          <th>Room Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Length</th>
        </tr>
        {displayAll().map(room =>(
          <tr>
          <td>{room.name}</td>
          <td>{room.description}</td>
          <td>{room.width}</td>
          <td>{room.length}</td>
          <td onClick={() => newPage(room.id)}>Room {room.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
