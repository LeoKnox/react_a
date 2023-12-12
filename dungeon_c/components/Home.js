import roomslist from "./roomslist";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      {roomslist[1].name}
    </div>
  );
}

export default Home;
