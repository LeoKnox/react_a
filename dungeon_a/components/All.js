const All = (changePage) => {
  const allChange = () => {
    changePage("room")
  }
  return (
    <div>
      <h3>All</h3>
      <button onClick={allChange} value="room">Change</button>
    </div>
  );
};

export default All;
