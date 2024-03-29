import useState from "react";
import Rooms from "./Rooms.js";

export default function Home() {
  console.log(Rooms.deleteRoom());
  //const [myRooms, setMyRooms] = useState(Rooms);
  console.log(JSON.stringify(myRooms));
  //console.log(JSON.stringify(Rooms));
  const handleDelete = (id) => {
    console.log("delete");
    var index = Rooms.map(function (e) {
      return e.id;
    }).indexOf(id);
    Rooms.splice(index, 1);
    //console.log(JSON.stringify(Rooms));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Height</th>
            <th>Width</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Rooms.map((room) => {
            return (
              <tr>
                <td>{room.name}</td>
                <td>{room.description}</td>
                <td>{room.height}</td>
                <td>{room.width}</td>
                <td>
                  <button onClick={() => alert(room.id)}>Edit</button>
                  &nbsp;
                  <button onClick={() => handleDelete(room.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
