import {useState} from "react";
import All from "./All.js";

const Home = () => {
  const roomData = [
    {name: "entry", description: "enter", width: 5, length:5 },
    {name: "throne", description: "King", width: 9, length:7 },
    {name: "guard", description: "Guards", width: 8, length:6 }
  ]
  const selectRoom = () => {
    alert("select room")
  }
  const [current, setCurrent] = useState(<All rooms={roomData} selectRoom={selectRoom} />);

  return (
    <div>
      {current}
    </div>
  )
}

export default Home;
