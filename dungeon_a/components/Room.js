const Room = ({roomNum=0}) => {
  console.log("room " + {roomNum})
  return (
    <div>
      <h3>Room {roomNum}</h3>
    </div>
  );
};

export default Room;
