import { memo } from "react";

const Home = ({ myRooms, addRoom }) => {
  console.log(JSON.stringify(myRooms));
  return (
    <>
      <h1>Rooms</h1>
    </>
  );
};

export default memo(Home);
