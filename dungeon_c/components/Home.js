import roomslist from "./roomslist";
import { useState } from "react";

function Home() {
  const [myRooms, setMyRooms] = useState(roomslist);
  function deleteRoom(id) {
    console.log("0");
    let newList = myRooms.find((i) => {
      console.log(myRooms.id + ":" + id);
      if (i.id === id) {
        console.log("find loop");
        myRooms.splice(i, 1);
      }
    });
    //setMyRooms(myRooms.splice(index, 1));
    console.log("1");
    console.log(JSON.stringify(newList));
    setMyRooms(newList);
    console.log(JSON.stringify(myRooms));
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
