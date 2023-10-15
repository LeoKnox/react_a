import { useState } from "react";
import Room from "./Room.js";
import All from "./All.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("room");
  const [currRoom, setCurrRoom] = useState();
  const changePage = (event) => {
    console.log("change page "+event.target.value)
    setCurrPage(event.target.value);
  }
  
  function setRoom(event) {
    setCurrRoom(event.target.value)
  }
  const thisPage = {
    room: <Room />,
    all: <All setRoom = {() => setCurrRoom()} />
  };

  return (
    <div>
      <h1>Title {currRoom}</h1>
      <button onClick={changePage} value="all">All</button>
      <button onClick={changePage} value="room">Room</button>
      {thisPage[currPage]}
    </div>
  )};

export default Home;
