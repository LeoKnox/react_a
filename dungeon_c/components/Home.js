import roomslist from "./roomslist";
import { useState } from "react";

function Home() {
  const [myRooms, setMyRooms] = useState(roomslist);
  function deleteRoom(id) {
    let newList = myRooms
      .find((i) => {
        if (myRooms.id === id) {
          myRooms.splice(i, 1)
        }
      })
    //setMyRooms(myRooms.splice(index, 1));
    setMyRooms(newList)
    console.log(roomslist);
  }
  return (
    <div className="home">
      <h1>Home</h1>
      {roomslist.map((rooms) => {
        return (
          <p>
            {rooms.name}:{rooms.description}:{rooms.length}x{rooms.width}
            <button onClick={(e) => deleteRoom(rooms.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
}

export default Home;
