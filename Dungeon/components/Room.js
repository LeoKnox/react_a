import {displayOne} from './roomData.js';

const Room = ({roomId}) => {
  
  let currentRoom = displayOne(roomId);
  alert(roomId);
  return (
    <>
    <p>Room page</p>
    <p>Name: {currentRoom.name}</p>
    </>
  )
}

export default Room;
