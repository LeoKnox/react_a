const FirstComp = ({ changeState }) => {
  function test() {
    changeState();
    alert("blue");
  }
  return <button onClick={test}>first comp</button>;
};

export default FirstComp;
