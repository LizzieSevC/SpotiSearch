import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import '../NavBar/NavBar.css';


const NavBar = () => {
  return (
    <>
<header>
    <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/allsongs'> All Songs </Link></li>
    </ul>
</header>
    <div>
    <Outlet/>
    </div>
    </>
  )
}

export default NavBar