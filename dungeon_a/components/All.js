import {allRooms} from './dungeonData.js';

const All = () => {
  let rooms = allRooms();
  return (
    <div>
      <h3>All</h3>
      {rooms.map(room => (
        <p>{room.name}</p>
      ))}
    </div>
  );
};

export default All;
