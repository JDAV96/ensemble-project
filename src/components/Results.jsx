import React from "react";
import ResultItem from "./ResultItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Results(props) {
    return <Box className="result-container">
    <Grid container spacing={1}>
    {props.searchResults.map((resultItem) => 
    <Grid item xs={3}>
    <ResultItem key={resultItem.imdbID} poster={resultItem.Poster} title={resultItem.Title} year={resultItem.Year}/>
    </Grid>)}
    </Grid>
    </Box>
}

export default Results;