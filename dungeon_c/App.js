import "./styles.css";
import Home from "./components/Home.js";
import roomsList from "./components/roomslist.js";
import Rooms from "./components/Rooms.js";

export default function App() {
  const [currRooms, setCurrRooms] = useState(roomsList);
  return (
    <div className="App">
      <Rooms rooms={currRooms} />
    </div>
  );
}
