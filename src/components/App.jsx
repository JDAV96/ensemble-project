import React, { useState } from "react";
import axios from "axios";
import omdbApiKey from "../apiKeys"
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results";

function App() {
    const [searchResults, setResults] = useState([]);

    function handleSearch(searchTitle) {
      console.log(searchTitle);
      axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: searchTitle, type: "movie"}}).then((res) => {
        if (res.data.Response) {
          setResults(res.data.Search);
        } 
        console.log(res);
      });
    }

    return <div><Header onSearch={handleSearch}/><Results searchResults={searchResults}/><Footer /></div>
}

export default App;