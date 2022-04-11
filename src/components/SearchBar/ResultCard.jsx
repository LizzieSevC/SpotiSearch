import React from 'react';
import Paper from '@mui/material/Paper';

const ResultCard = (props) => {

    

  return (
        <Paper className='resultCard' elevation={5}>
               <p> Song: {value.Song} </p>
               <p> Artist: {value.Artist} </p>
               <p> Genre: {value.Genre} </p>
               <div>
               <p> Album: {value.Album} </p>
               <p> Year: {value.Year} </p>
               <p> Country: {value.Country} </p>
               <p> Language: {value.Language} </p>
               </div>
               <button>
                   More info...
               </button>
            </Paper>
  )
}

export default ResultCard