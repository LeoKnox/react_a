import {useState} from "react";
import Room from "./Room.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("Room")
  const thisPage = {
    "room": <Room />
  }

  return thisPage.room
};

export default Home;
