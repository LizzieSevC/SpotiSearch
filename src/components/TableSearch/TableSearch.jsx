import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import data from '../SpotiCloneDataBase.json';


const TableSearch = () => {

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <>
    <div>
    <p>
        All our songs, all the info, in one place:
    </p>
    </div> 

    <div>
<Paper elevation={5}>
<TableContainer>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Song</TableCell>
            <TableCell align="center">Artist</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Album</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((list, id) => (
            <TableRow
              key={list.id}
            >
              <TableCell align="center" component="th" scope="row">
                {list.Song}
              </TableCell>
              <TableCell align="center">{list.Artist}</TableCell>
              <TableCell align="center">{list.Genre}</TableCell>
              <TableCell align="center">{list.Album}</TableCell>
              <TableCell align="center">{list.Year}</TableCell>
              <TableCell align="center">{list.Country}</TableCell>
              <TableCell align="center">{list.Language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
      count={1000}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
    </Paper>

    </div>


    </>
  )
}

export default TableSearch