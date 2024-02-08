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
      <p>Picture of Room</p>
      <table style={tableStyle}>
        <GraphicRoom length={length} width={width} />
      </table>
    </div>
  );
};
