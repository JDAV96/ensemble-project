import React, { useState } from "react";
import axios from "axios";
import omdbApiKey from "../apiKeys"
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results";

function App() {
    const [searchResults, setResults] = useState([]);

    function handleSearch(searchTitle) {
      axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: "Avengers"}}).then((res) => console.log(res));
        // setNotes([...notes, newNote]);
    }

    return <div><Header onSearch={handleSearch}/><Results searchResults={searchResults}/><Footer /></div>
}

export default App;