import React from "react";
import ResultItem from "./ResultItem";

function Results(props) {
    return props.searchResults.map((resultItem) => <ResultItem key={resultItem.imdbID} poster={resultItem.Poster} title={resultItem.Title} year={resultItem.Year}/>)
}

export default Results;