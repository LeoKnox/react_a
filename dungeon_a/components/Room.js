import {roomData } from './dungeonData.js'

const Room = ({roomNum=0}) => {
  let room = roomData(roomNum)
  return (
    <div>
      <h3>Room {room.name}</h3>
      <p><b>Description</b></p>
      <p>{room.description}</p>
      <p>
        <label className="roomInfo">
        Width x Length: &#160;
        </label>
        <label className="roomInfo">
        <label className="roomInfo">  
        {room.width}&#160; 
        </label>
        <label className="roomInfo">
        {room.length}
        </label>
        </label>
      </p>
    </div>
  );
};

export default Room;
