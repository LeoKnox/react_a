const All = ({rooms}) => {
  console.log(rooms);
  return (
    <div>
      <h3>All Rooms</h3>
      {rooms.map(room => (
        <p><button>{room.name}</button></p>
      ))}
    </div>
  )
}

export default All;
