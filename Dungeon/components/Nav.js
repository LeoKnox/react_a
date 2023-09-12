import Home from './Home.js';
import { useState } from 'react';

const Nav = () => {
  const [page, setPage] = useState(<Home />)
  return (
    <>
    <p>New Nav</p>
    {page}
    </>
  )
}

export default Nav;
