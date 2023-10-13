import { useState } from "react";
import Room from "./Room.js";
import All from "./All.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("room");
  const [currRoom, setCurrRoom] = useState(0);
  const changePage = (event) => {
    console.log("change page "+event.target.value)
    setCurrPage(event.target.value);
  }
  const thisPage = {
    room: <Room />,
    all: <All />
  };

  return (
    <div>
      <button onClick={changePage} value="all">All</button>
      <button onClick={changePage} value="room">Room</button>
      {thisPage[currPage]}
    </div>
  )};

export default Home;
