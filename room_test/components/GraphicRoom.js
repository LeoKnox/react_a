export default GraphicRoom = ({
  length,
  width,
  addMonster,
  setAddMonster,
  newMonster,
  setNewMonster,
}) => {
  const tileStyle = {
    backgroundColor: "lightgray",
    fontSize: "1.3em",
    fontWeight: "bold",
    width: "1.1em",
    height: "1.1em",
  };
  let newWidth = [];
  let newLength = [];
  console.log(`new monster ${JSON.stringify(newMonster)}`);
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
    newLength.push(newWidth);
    newWidth = [];
  }
  newLength[0][1] = "+";
  newLength[newMonster["y"]][newMonster["x"]] = "m";
  return (
    <>
      {newLength.map((row, y) => (
        <tr>
          {row.map((tile, x) => (
            <td style={tileStyle} id={y + "," + x}>
              {tile}
            </td>
          ))}
        </tr>
      ))}
      <p>{addMonster ? "true" : "false"}</p>
    </>
  );
};
