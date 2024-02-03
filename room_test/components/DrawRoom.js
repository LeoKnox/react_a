export default DrawRoom = ({ width, length }) => {
  const renderRoom = () => {
    let newWidth = [];
    let newLength = [];
    for (let y = 0; y < length + 2; y++) {
      for (let x = 0; x < width + 2; x++) {
        newWidth.push(<td>*</td>);
      }
      newLength.push(newWidth);
      newWidth = [];
    }
    return newLength;
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
