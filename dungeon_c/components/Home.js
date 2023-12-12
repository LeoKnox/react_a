import roomslist from "./roomslist";

function Home() {
  function deleteRoom(id) {
    let index = roomslist
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    roomslist.splice(index, 1);
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
