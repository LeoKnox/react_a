export default DrawRoom = ({ width, length }) => {
  const renderRoom = () => {
    let newArray = [];
    for (let x = 0; x < width; x++) {
      newArray.push(<td>*</td>);
      console.log(`new array ${newArray}`);
    }
    return newArray;
  };
  return (
    <div>
      <h3>Picture of Room</h3>
      <p>
        {width}:{length}
      </p>
      <table>{renderRoom()}</table>
    </div>
  );
};
