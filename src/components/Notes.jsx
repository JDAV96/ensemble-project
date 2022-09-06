import React from "react";
import Note from "./Note";

function Notes(props) {
    return props.notes.map((note, index) => <Note onDelete={props.onDelete} id={index} key={index} title={note.title} body={note.content}/>)
}

export default Notes;