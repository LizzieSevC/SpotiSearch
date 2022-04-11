import React from 'react';
import { useState, useEffect } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import DataApi from '../../api';
import ResultCard from './ResultCard';


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
        //testing searchbar function with local json
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
        {songs.map((value,index) => {
            return(
                <ResultCard value={value} key={index} />
            );
        })}
    </div>
    )}
    </div>
    </>
  )
}

export default SearchBar