import React from "react";
import ResultItem from "./ResultItem";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Results(props) {
    return <Box className="result-container">
    <Grid container direction="row" alignItems="stretch" rowSpacing={1} columnSpacing={1}>
    {props.searchResults.map((resultItem) => 
    <Grid item xs={12} sm={6} md={2.4}>
    <ResultItem key={resultItem.imdbID} poster={resultItem.Poster} title={resultItem.Title} year={resultItem.Year}/>
    </Grid>)}
    </Grid>
    </Box>
}

export default Results;