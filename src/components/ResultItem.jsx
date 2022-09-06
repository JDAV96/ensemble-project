import React from "react";
import Fab from '@mui/material/Fab';


function ResultItem(props) {
    return <div className="movie-result"><h1> {props.title} </h1> <p> {props.year} </p> <img src={props.poster} alt=" Poster N/A" /> <Fab>PLACEHOLDER LABEL </Fab></div>
}

export default ResultItem;