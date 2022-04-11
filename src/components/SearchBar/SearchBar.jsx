import React from 'react';
import { useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import DataApi from '../../api';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputWord, setInputWord] = useState("");
    const [songs, setSongs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMusic(inputWord)
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInputWord(searchWord);
/*         const newFilter = data.filter((value) => {
            return value.Song.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
        setFilteredData(newFilter);            
        }; */
    }

    const clearInput = () => {
        setSongs([]);
        setInputWord("");
    }

    const fetchMusic = async(inputWord) => {
        setSongs([]);
        const res = await DataApi.get('/get-searches/' + inputWord);
        setSongs(res.data);
        }


  return (
    <>
<div className='search'>
    <form className='searchContainer' onSubmit={handleSubmit} >
       <input type='text' 
       value={inputWord}
       placeholder={placeholder} 
       onChange={handleFilter}
       />
        <button className='searchIcon'>
            {songs.length === 0 ? (<SearchIcon />) : (<CloseIcon id="clearButton" onClick={clearInput} />)}
        
        </button>
    </form>

    {songs.length != 0 && (
    <div className='searchResult'>
        {songs.map((value,key) => {
            return(
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
            );
        })}
    </div>
    )}
    </div>
    </>
  )
}

export default SearchBar