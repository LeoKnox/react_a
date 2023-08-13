const FirstComp = ({ changeState }) => {
  function test() {
    changeState("blue");
    alert("blue");
  }
  return <button onClick={changeState}>first comp</button>;
};

export default FirstComp;
