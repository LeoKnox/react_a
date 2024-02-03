export default DrawRoom = ({ width, length }) => {
  const tableStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const renderRoom = () => {
    let newWidth = [];
    let newLength = [];
    for (let y = 0; y < length + 2; y++) {
      for (let x = 0; x < width + 2; x++) {
        if (y === 0 || y === length + 1 || x === 0 || x === width + 1) {
          newWidth.push(<td>&#9632;</td>);
        } else {
          newWidth.push(<td>&#183;</td>);
        }
      }
      newLength.push(<tr>{newWidth}</tr>);
      newWidth = [];
    }
    return newLength;
    newLength = [];
  };
  return (
    <div>
      <h3>Picture of Room</h3>
      <p>
        {width}:{length}
      </p>
      <table style={tableStyle}>{renderRoom()}</table>
    </div>
  );
};
