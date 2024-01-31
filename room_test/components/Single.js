export default Single = ({ roomId, room, setRoomId }) => {
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setRoomId(-1)}>Home</button>
      <p>{room["name"]}</p>
    </>
  );
};
