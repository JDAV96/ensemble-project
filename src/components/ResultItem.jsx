import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function ResultItem(props) {
    return <div className="note"><h1> A Title </h1> <p> A body </p> <button><DeleteIcon/></button></div>
}

export default ResultItem;