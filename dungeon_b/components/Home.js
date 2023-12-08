import react from "react";
import Rooms from "./Rooms.js";

export default function Home() {
  console.log(JSON.stringify(Rooms));
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
                  <button onClick={() => alert(room.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
