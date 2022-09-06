import React from "react";
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PageNav(props) {
    return <div className="page-nav">
    <Fab onClick={props.onFirst}> First </Fab> 
    <Fab onClick={props.onPrev}> <ArrowBackIcon /> </Fab> 
    <p> {props.pageState.currentPage} / {props.pageState.totalPages} </p>
    <Fab onClick={props.onNext}> <ArrowForwardIcon /> </Fab> 
    <Fab onClick={props.onLast}> Last </Fab></div>
}

export default PageNav;