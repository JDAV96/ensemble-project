import React from "react";
import TheatersIcon from '@mui/icons-material/Theaters';

import SearchForm from "./SearchForm"

const appName = "MovSearch";

function Header(props) {
    return <header><h1><TheatersIcon /> {appName}</h1> <SearchForm onSearch={props.onSearch}/></header>
}

export default Header;