export default Single = ({ roomId, room }) => {
  return (
    <>
      <h3>Single Room {roomId} </h3>
      <p>{room["name"]}</p>
    </>
  );
};
