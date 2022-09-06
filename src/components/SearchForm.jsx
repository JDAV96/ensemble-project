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

    return (
      <div className="search">
        <form className="create-note">
          <input onChange={handleChange} onClick={startInput} name="title" placeholder="Movie Title" value={searchTitle}/>
          <Zoom in={inputMode}><Fab onClick={(event) => {event.preventDefault(); props.onSearch(searchTitle); updateSearchTitle(""); endInput()}}><SearchIcon/></Fab></Zoom>
        </form>
      </div>
    );
  }

  export default SearchForm;