const Room = ({changePage}) => {
  return (
    <div>
      <h3>Room</h3>
      <button onClick={changePage} value="all">Change</button>
    </div>
  );
};

export default Room;
