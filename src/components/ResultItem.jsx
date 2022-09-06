import React from "react";
import Fab from '@mui/material/Fab';


function ResultItem(props) {
    return <div className="movie-result"><h1> {props.title} </h1> <p> {props.year} </p> <img src={props.poster} /> <Fab><p> PLACEHOLDER LABEL </p></Fab></div>
}

export default ResultItem;