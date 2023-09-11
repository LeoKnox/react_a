import {Room} from './Nav.js';

const Nav = ({changePage}) => {
  function changeRoom() {
    setCurrPage(<Room />)
    alert("red");
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={changePage}>Room</button>
    </div>
  )
}

export default Nav;
