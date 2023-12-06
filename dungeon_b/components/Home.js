import react from "react";
import Rooms from "./Rooms.js";

export default function Home() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Height</th>
            <th>Width</th>
          </tr>
        </thead>
        <tbody>
        Rooms.map((room) => {
          return(
          <tr>
            <td>{room.name}</td>
            <td>{room.description}</td>
            <td>{room.height}</td>
            <td>{room.width}</td>
          </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
