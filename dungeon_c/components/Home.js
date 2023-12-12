import roomslist from "./roomslist";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      {roomslist.map((rooms) => {
        <p>
          {rooms.name}:{rooms.desrciption}:{rooms.length}x{rooms.width}
        </p>;
      })}
    </div>
  );
}

export default Home;
