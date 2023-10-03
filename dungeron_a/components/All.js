const All = ({rooms}) => {
  console.log(rooms);
  return (
    <div>
      <h3>All Rooms</h3>
      {rooms.map(room => (
        <p>{room.name}</p>
      ))}
    </div>
  )
}

export default All;
