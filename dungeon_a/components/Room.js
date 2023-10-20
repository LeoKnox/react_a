import {roomData } from './dungeonData.js'

const Room = ({roomNum=0}) => {
  var room = roomData(roomNum)
  console.log(roomData(1))
  return (
    <div>
      <h3>Room {room.name}</h3>
    </div>
  );
};

export default Room;
