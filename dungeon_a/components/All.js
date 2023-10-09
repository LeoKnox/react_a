const All = ({changePage}) => {
  return (
    <div>
      <h3>All</h3>
      <button onClick={() => changePage("room")}>Change</button>
    </div>
  );
};

export default All;
