import {useState} from "react";
import All from "./All.js";
import Room from "./Room.js";

const Home = () => {
  const roomData = [
    {id:1, name: "entry", description: "enter", width: 5, length:5 },
    {id:2, name: "throne", description: "King", width: 9, length:7 },
    {id:3, name: "guard", description: "Guards", width: 8, length:6 }
  ]
  const goHome = () => {
    setCurrent(<All rooms={roomData} selectRoom={selectRoom} />)
  }
  const selectRoom = (roomId) => {
    setCurrent(<Room goHome={goHome()} />);
    //alert("select room"+roomId)
  }
  const [current, setCurrent] = useState(<All rooms={roomData} selectRoom={selectRoom} />);

  return (
    <div>
      {current}
    </div>
  )
}

export default Home;
