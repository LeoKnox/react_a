import {Room} from './Nav.js';

const Nav = ({setCurrPage}) => {
  function changeRoom() {
    setCurrPage(<Room />)
    alert("red");
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={changeRoom}>Room</button>
    </div>
  )
}

export default Nav;
