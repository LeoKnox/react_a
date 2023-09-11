const Nav = () => {
  function changeRoom() {
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
