import {Room} from './Nav.js';

const Nav = ({changePage}) => {
  let y = <Room />;
  function changeRoom() {
    changePage(y)
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={changeRoom}>Room</button>
    </div>
  )
}

export default Nav;
