import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [newNote, updateNote] = useState({title: "", content:""});
    const [inputMode, changeMode] = useState(false);

    function handleChange(event) {
        updateNote({...newNote, [event.target.name]: event.target.value});
    }

    function startInput() {
        changeMode(true);
    }

    function endInput() {
        changeMode(false);
    }

    return (
      <div>
        <form className="create-note">
          {inputMode && <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>}
          <textarea onClick={startInput} onChange={(event) => {if(!inputMode) {startInput();} handleChange(event);}} name="content" placeholder="Take a note..." rows={inputMode ? "3" : "1"} value={newNote.content} />
          <Zoom in={inputMode}><Fab onClick={(event) => {event.preventDefault(); props.onAdd(newNote); updateNote({title: "", content:""}); endInput()}}><AddIcon/></Fab></Zoom>
        </form>
      </div>
    );
  }

  export default CreateArea;