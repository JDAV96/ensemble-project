import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function ResultItem(props) {
    return <div className="note"><h1> {props.title} </h1> <p> {props.year} </p> <img src={props.poster} /> <button><DeleteIcon/></button></div>
}

export default ResultItem;