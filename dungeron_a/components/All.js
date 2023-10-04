const All = ({rooms, selectRoom}) => {
  console.log(rooms);
  return (
    <div>
      <h3>All Rooms</h3>
      {rooms.map(room => (
        <p><button onClick={selectRoom}>{room.name}</button></p>
      ))}
    </div>
  )
}

export default All;
