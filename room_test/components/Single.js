export default Single = ({ roomId, room, setRoomId }) => {
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <button onClick={() => setRoomId(-1)}>Home</button>
      <p>{room["name"]}</p>
      <p>Description:</p>
      <p>{room["description"]}</p>
      <p>
        Width:{room["width"]} Length:{room["length"]}
      </p>
    </>
  );
};
