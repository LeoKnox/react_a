import roomslist from "./roomslist";

function Home() {
  function deleteRoom(id) {
    alert(id);
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
