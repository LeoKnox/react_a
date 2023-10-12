import { useState } from "react";
import Room from "./Room.js";
import All from "./All.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("room");
  const changePage = (event) => {
    console.log("change page "+event.target.value)
    setCurrPage(event.target.value);
  }
  const thisPage = {
    room: <Room changePage={changePage} />,
    all: <All changPage={() => changePage()} />
  };

  return (
    <div>
      {currPage}
    </div>
  )};

export default Home;
