import roomslist from "./roomslist";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      {roomslist.map((rooms) => {
        return (
          <p>
            {rooms.name}:{rooms.description}:{rooms.length}x{rooms.width}
          </p>
        );
      })}
    </div>
  );
}

export default Home;
