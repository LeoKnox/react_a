import {Room} from './Nav.js';

const Nav = ({changePage}) => {
  function changeRoom() {
    changePage(<Room />)
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={changeRoom}>Room</button>
    </div>
  )
}

export default Nav;
