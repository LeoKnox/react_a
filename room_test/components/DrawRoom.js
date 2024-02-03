export default DrawRoom = ({ width, length }) => {
  const renderRoom = () => {
    return <td>*</td>;
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
