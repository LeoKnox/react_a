import {displayOne} from './roomData.js';

const Room = (roomId) => {
  alert({roomId});
  let currentRoom = displayOne(roomId);
  return (
    <>
    <p>Room page</p>
    <p>Name: {currentRoom.name}</p>
    </>
  )
}

export default Room;
