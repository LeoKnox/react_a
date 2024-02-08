export default GraphicRoom = ({ length, width }) => {
  const tileStyle = {
    backgroundColor: "lightgray",
    width: "20px",
    height: "20px",
  };

  console.log(`length: ${length} width: ${width}`);
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
        newWidth.push("■");
      } else {
        newWidth.push("·");
      }
    }
    console.log(`new width ${JSON.stringify(newWidth)}`);
    newLength.push(newWidth);
    newWidth = [];
  }
  console.log(`new room: ${JSON.stringify(newLength)}`);
  newLength[0][1] = "+";
  return (
    <>
      {newLength.map((row) => (
        <tr>
          {row.map((tile) => (
            <td style={tileStyle}>{tile}</td>
          ))}
        </tr>
      ))}
    </>
  );
};
