import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../SpotiCloneDataBase.json';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';



const Home = () => {


 
  return (
    <>

<p className='pageTitle'>
    Welcome to your <span className='titleChange'>S</span>poti<span className='titleChange'>S</span>earch!
    </p>

<div>

<SearchBar placeholder="Search your fav song..." data={data} />


</div>


    
    </>
  )
}

export default Home