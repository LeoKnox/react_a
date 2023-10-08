import { useState } from "react";
import Room from "./Room.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("room");
  const thisPage = {
    room: <Room />
  };

  return (thisPage[currPage]);
};

export default Home;
