import roomslist from "./roomslist";
import { useState } from "react";

function Home() {
  const [myRooms, setMyRooms] = useState(roomslist);
  function deleteRoom(id) {
    console.log("0");
    let newList = myRooms.find((i) => {
      if (myRooms.id === id) {
        console.log("find loop");
        myRooms.splice(i, 1);
      }
    });
    //setMyRooms(myRooms.splice(index, 1));
    console.log("1");
    console.log(JSON.stringify(newList));
    setMyRooms(newList);
    console.log(roomslist);
  }
  return (
    <div className="home">
      <h1>Home</h1>
      {roomslist.map((rooms) => {
        return (
          <p>
            {rooms.id}-{rooms.name}:{rooms.description}:{rooms.length}x
            {rooms.width}
            <button onClick={(e) => deleteRoom(rooms.id)}>
              delete {rooms.id}
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Home;
