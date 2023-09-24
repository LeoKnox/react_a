import {displayOne} from './roomData.js';

const Room = () => {
  let currentRoom = displayOne();
  return (
    <>
    <p>Room page</p>
    <p>Name: {currentRoom.name}</p>
    </>
  )
}

export default Room;
