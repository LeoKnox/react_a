import { useState } from "react";
import FirstComp from "./firstComp.js";

const Home = () => {
  const dungeon = [
    { id: 1, name: "entry", width: 5, length: 5 },
    { id: 2, name: "orc_one", width: 8, length: 6 },
    { id: 3, name: "treasure_one", width: 7, length: 4 }
  ];
  const [firstState, setFirstState] = useState("red");

  function firstClick() {
    setFirstState("blue");
    console.log(firstState);
  }

  return (
    <div>
      <h1>I'm Home</h1>
      <h3>{firstState}</h3>
      <FirstComp changeState={firstClick} />
      <button onClick={() => firstClick()}>click</button>
      {dungeon.map((d) => (
        <p>{d.name}</p>
      ))}
    </div>
  );
};

export default Home;
