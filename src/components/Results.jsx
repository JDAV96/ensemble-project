import React from "react";
import ResultItem from "./ResultItem";

function Results(props) {
    return <div className="result-container">{props.searchResults.map((resultItem) => <ResultItem key={resultItem.imdbID} poster={resultItem.Poster} title={resultItem.Title} year={resultItem.Year}/>)}</div>
}

export default Results;