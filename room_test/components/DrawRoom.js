export default DrawRoom = ({ width, length }) => {
  const tableStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const renderRoom = () => {
    console.log(`render room ${length} width ${width}`);
    let newWidth = [];
    let newLength = [];
    console.log(`new width ${newWidth.length} new length ${newLength.length}`);
    for (let y = 0; y < length + 2; y++) {
      for (let x = 0; x < width + 2; x++) {
        if (y === 0 || y === length + 1 || x === 0 || x === width + 1) {
          newWidth.push(
            <td name={x} id={y}>
              &#9632;
            </td>
          );
        } else {
          newWidth.push(<td>&#183;</td>);
        }
      }
      newLength.push(<tr>{newWidth}</tr>);
      newWidth = [];
    }
    console.log(`new room: ${newLength}`);
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
