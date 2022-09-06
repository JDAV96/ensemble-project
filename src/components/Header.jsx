import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

const appName = "Keeper";

function Header() {
    return <header> <h1><HighlightIcon />{appName}</h1></header>
}

export default Header;