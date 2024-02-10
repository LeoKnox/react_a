import { useState } from "react";

export default GraphicRoom = ({ length, width }) => {
  const tileStyle = {
    backgroundColor: "lightgray",
    fontSize: "1.3em",
    fontWeight: "bold",
    width: "1.1em",
    height: "1.1em",
  };
  const [addMonster, setAddMonster] = useState(false);
  const placeMonster = () => {
    console.log("add monster");
  };
  let newWidth = [];
  let newLength = [];
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
  return (
    <>
      {newLength.map((row) => (
        <tr>
          {row.map((tile) => (
            <td
              style={tileStyle}
              onClick={() => (addMonster ? placeMonster() : null)}
            >
              {tile}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
