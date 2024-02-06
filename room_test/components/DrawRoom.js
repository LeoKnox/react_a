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
    for (let y = 0; y < parseInt(length) + 2; y++) {
      for (let x = 0; x < parseInt(width) + 2; x++) {
        if (
          y === 0 ||
          y === parseInt(length) + 1 ||
          x === 0 ||
          x === parseInt(width) + 1
        ) {
          newWidth.push(<td id={y + ":" + x}>&#9632;</td>);
        } else {
          newWidth.push(<td id={y + ":" + x}>&#183;</td>);
        }
      }
      console.log(`new width ${newWidth}`);
      newLength.push(<tr>{newWidth}</tr>);
      newWidth = [];
    }
    console.log(`new room: ${newLength}`);
    newLength[0][1] = "*";
    return newLength;
  };
  return (
    <div>
      <h3>Picture of Room</h3>
      <p>
        {width}:{length}
      </p>
      <p>{renderRoom()[0][0]}+</p>
      <table style={tableStyle}>{renderRoom()}</table>
    </div>
  );
};
