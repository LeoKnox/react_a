import {Room} from './Nav.js';

const Nav = ({changePage, data}) => {
  let y = <Room />;
  function changeRoom() {
    changePage(y)
  }

  return (
    <div>
      <button>Home</button>
      <button onClick={changePage(<Room />)}>Room</button>
    </div>
  )
}

export default Nav;
