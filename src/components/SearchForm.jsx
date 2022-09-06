import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm(props) {
    const [searchTitle, updateSearchTitle] = useState("");
    const [inputMode, changeMode] = useState(false);

    function handleChange(event) {
        updateSearchTitle(event.target.value);
    }

    function startInput() {
        changeMode(true);
    }

    function endInput() {
        changeMode(false);
    }

    function handleSearch(event) {
      event.preventDefault(); 
      props.onSearch(searchTitle); 
      updateSearchTitle(""); 
      endInput();
    }

    return (
      <div className="search">
        <form className="search-form" onSubmit={handleSearch}>
          <input onChange={handleChange} onClick={startInput} onBlur={endInput} name="title" placeholder="Movie Title" value={searchTitle}/>
          <Zoom in={inputMode}><Fab onClick={handleSearch}><SearchIcon/></Fab></Zoom>
        </form>
      </div>
    );
  }

  export default SearchForm;