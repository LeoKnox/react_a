import {roomData } from './dungeonData.js'

const Room = ({roomNum=0}) => {
  let room = roomData(roomNum)
  console.log("room " + {room})
  return (
    <div>
      <h3>Room {roomNum}</h3>
    </div>
  );
};

export default Room;
