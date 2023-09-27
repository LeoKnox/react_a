import {displayOne} from './roomData.js';

const Room = ({roomId=1}) => {
  
  let currentRoom = displayOne(roomId);
  alert(roomId);
  return (
    <>
    <p>Room page</p>
    <p>Name: {currentRoom}</p>
    </>
  )
}

export default Room;
