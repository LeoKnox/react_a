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
    backgroundColor: "darkgray",
    tableLayout: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div style={{ display: "inline-block" }}>
      <p>Picture of Room</p>
      <ul>
        <li>Name: {newMonster["monsterName"]}</li>
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
