import {useState} from "react";
import Room from "./Room.js";

const Home = () => {
  const [currPage, setCurrPage] = useState("Room")
  
  return <Room />
};

export default Home;
