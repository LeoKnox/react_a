import { memo } from "react";

export default Home = ({ myRooms, addRoom }) => {
  console.log(JSON.stringify(myRooms));
  return (
    <>
      <h1>Rooms</h1>
      {myRooms.map((room) => {
        return (
          <>
            <p>
              {room["name"]}
              <button>delete</button>
            </p>
          </>
        );
      })}
      <button onClick={addRoom}>click</button>
    </>
  );
};
