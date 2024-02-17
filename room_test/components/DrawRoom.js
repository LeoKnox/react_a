import "./GraphicRoom.js";

export default DrawRoom = ({
  width,
  length,
  addMonster,
  setAddMonster,
  newMonster,
  setNewMonster,
  monsters,
}) => {
  const tableStyle = {
    color: "blue",
    display: "inline-block",
    backgroundColor: "darkgray",
    tableLayout: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const updateMonsterName = (e) => {
    const { name, value } = e.target;
    setNewMonster((item) => ({
      ...item,
      [name]: value,
    }));
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
        {monsters.map((monster) => (
          <p>
            Name: {monster["monsterName"]} {monster["x"]} x {monster["y"]}
          </p>
        ))}
        <li>
          Name:{" "}
          <input
            type="text"
            name="monsterName"
            value={newMonster["monsterName"]}
            onChange={updateMonsterName}
          />
        </li>
        <li>X: {newMonster["x"]}</li>
        <li>Y: {newMonster["y"]}</li>
      </ul>
      <table style={tableStyle}>
        <GraphicRoom
          mobName={newMonster["monsterName"]}
          length={length}
          width={width}
          addMonster={addMonster}
          setAddMonster={setAddMonster}
          newMonster={newMonster}
          setNewMonster={setNewMonster}
          monsters={monsters}
        />
      </table>
    </div>
  );
};
