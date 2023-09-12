import Home from './Home.js';
import Room from './Room.js';
import { useState } from 'react';

const Nav = () => {
  const [page, setPage] = useState(<Home />)
  return (
    <>
    <p onClick={() => setPage(<Room />)}>New Nav</p>
    {page}
    </>
  )
}

export default Nav;
