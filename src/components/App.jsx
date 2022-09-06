import React, { useState } from "react";
import axios from "axios";
import omdbApiKey from "../apiKeys"
import Header from "./Header";
import CreateArea from "./CreateArea"
import Footer from "./Footer";
import Notes from "./Notes";

function App() {
    const [notes, setNotes] = useState([]);

    axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {t: "Cloud Atlas"}}).then((res) => console.log(res));

    function addNote(newNote) {
        setNotes([...notes, newNote]);
    }

    function deleteNote(id) {
        setNotes(notes.filter((value, index) => index !== id));
    }

    return <div><Header /><CreateArea onAdd={addNote}/><Notes onDelete={deleteNote} notes={notes}/><Footer /></div>
}

export default App;