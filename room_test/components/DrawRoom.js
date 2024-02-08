import "./GraphicRoom.js";

export default DrawRoom = ({ width, length }) => {
  const tableStyle = {
    color: "blue",
    backgroundColor: "darkgray",
    tableLayout: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div>
      <h3>Picture of Room</h3>
      <p>
        {width}:{length}
      </p>
      <table style={tableStyle}>
        <GraphicRoom length={length} width={width} />
      </table>
    </div>
  );
};
