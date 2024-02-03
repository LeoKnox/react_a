export default DrawRoom = ({ width, length }) => {
  const renderRoom = () => {
    let newArray = [];
    for (let y = 0; y < length + 2; y++) {
      //newArray.push(<tr>);
      for (let x = 0; x < width + 2; x++) {
        newArray.push(<td>*</td>);
      }
      //newArray.push(</tr>);
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
