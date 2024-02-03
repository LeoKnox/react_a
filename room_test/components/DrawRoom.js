export default DrawRoom = ({ width, length }) => {
  const tableStyle = { color: "red" };
  const renderRoom = () => {
    let newWidth = [];
    let newLength = [];
    for (let y = 0; y < length + 2; y++) {
      for (let x = 0; x < width + 2; x++) {
        if (y === 0 || y === length + 1) {
          newWidth.push(<td>*</td>);
        } else {
          newWidth.push(<td>.</td>);
        }
      }
      newLength.push(<tr>{newWidth}</tr>);
      newWidth = [];
    }
    return newLength;
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
