import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputWord, setInputWord] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInputWord(searchWord);
        const newFilter = data.filter((value) => {
            return value.Song.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
        setFilteredData(newFilter);            
        };
    }

    const clearInput = () => {
        setFilteredData([]);
        setInputWord("");
    }


  return (
    <>
<div className='search'>
    <div className='searchContainer'>
       <input type='text' 
       value={inputWord}
       placeholder={placeholder} 
       onChange={handleFilter} 
       />
        <div className='searchIcon'>
            {filteredData.length === 0 ? (<SearchIcon />) : (<CloseIcon id="clearButton" onClick={clearInput} />)}
        
        </div>
    </div>
    </div>
    {filteredData.length != 0 && (
    <div className='searchResult'>
        {filteredData.map((value,key) => {
            return(
            <button className='searchButton'>

                {value.Song}

            </button>
            );
        })}
    </div>
    )}
    </>
  )
}

export default SearchBar