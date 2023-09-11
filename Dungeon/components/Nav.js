import {Room} from './Nav.js';

const Nav = ({changePage}) => {
  function changeRoom() {
    alert("red");
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={() => changePage(<Room />)}>Room</button>
    </div>
  )
}

export default Nav;
