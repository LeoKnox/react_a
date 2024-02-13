import "./GraphicRoom.js";

export default DrawRoom = ({
  width,
  length,
  addMonster,
  setAddMonster,
  newMonster,
  setNewMonster,
}) => {
  const tableStyle = {
    color: "blue",
    display: "inline-block",
    backgroundColor: "darkgray",
    tableLayout: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div>
      <p>Picture of Room</p>
      <ul
        style={{
          display: "inline-block",
          verticalAlign: "top",
          marginRight: "1em",
        }}
      >
        <li>
          Name:{" "}
          <input
            type="text"
            name="monsterName"
            value={newMonster["monsterName"]}
          />
        </li>
        <li>X: {newMonster["x"]}</li>
        <li>Y: {newMonster["y"]}</li>
      </ul>
      <table style={tableStyle}>
        <GraphicRoom
          length={length}
          width={width}
          addMonster={addMonster}
          setAddMonster={setAddMonster}
          newMonster={newMonster}
          setNewMonster={setNewMonster}
        />
      </table>
    </div>
  );
};
