import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import '../NavBar/NavBar.css';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


const NavBar = () => {
  return (
    <>
<header>
    <ul>
      <li><Link to='/'> Search </Link></li>
      <LibraryMusicIcon color='error' fontSize='large' />
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