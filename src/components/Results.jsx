import React from "react";
import ResultItem from "./ResultItem";

function Results(props) {
    return props.searchResults.map((resultItem, index) => <ResultItem id={index} key={index}/>)
}

export default Results;