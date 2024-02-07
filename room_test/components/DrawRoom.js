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
          newWidth.push("&#9632;");
        } else {
          newWidth.push("&#183;");
        }
      }
      console.log(`new width ${newWidth}`);
      newLength.push({ newWidth });
      newWidth = [];
    }
    console.log(`new room: ${newLength}`);
    newLength[0][1] = "+";
    return (
      <>
        {newLength.map((row) => (
          <tr>
            {row.map((item) => (
              <td>item</td>
            ))}
          </tr>
        ))}
      </>
    );
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
