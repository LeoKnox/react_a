import {roomData } from './dungeonData.js'

const Room = ({roomNum=0}) => {
  let room = roomData(roomNum)
  return (
    <div>
      <h3>Room {room.name}</h3>
    </div>
  );
};

export default Room;
