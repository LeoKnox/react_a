import React from "react";

const Rooms = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {props.rooms.length > 0 ? (
          props.rooms.map((room) => {
            const { id, name, description, width, length } = room;
            return (
              <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{width}</td>
                <td>{length}</td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <h3>No Rooms</h3>
        )}
      </tbody>
    </table>
  );
};

export default Rooms;
