import { memo } from "react";

export default Home = ({ myRooms, addRoom, deleteRoom }) => {
  console.log(JSON.stringify(myRooms));
  return (
    <>
      <h1>Rooms</h1>
      {myRooms.map((room) => {
        return (
          <>
            <p>
              {room["name"]}
              <button onClick={() => deleteRoom(room["id"])}>delete</button>
            </p>
          </>
        );
      })}
      <button onClick={addRoom}>click</button>
    </>
  );
};
