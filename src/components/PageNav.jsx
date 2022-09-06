import React from "react";

function PageNav(props) {
    return <div className="page-nav">
    <button onClick={props.onFirst}> First Page </button> 
    <button onClick={props.onPrev}> Prev </button> 
    <p> {props.pageState.currentPage} / {props.pageState.totalPages} </p>
    <button onClick={props.onNext}> Next</button> 
    <button onClick={props.onLast}>Last page</button></div>
}

export default PageNav;