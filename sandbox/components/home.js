const Home = () => {
  const dungeon = [
    { id: 1, name: "entry", width: 5, length: 5 },
    { id: 2, name: "orc_one", width: 8, length: 6 },
    { id: 3, name: "treasure_one", width: 7, length: 4 }
  ];
  return (
    <div>
      <h1>I'm Home</h1>
      {dungeon.map((d) => (
        <p>{d.name}</p>
      ))}
    </div>
  );
};

export default Home;
