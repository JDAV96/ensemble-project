import React, { useState } from "react";
import axios from "axios";
import omdbApiKey from "../apiKeys"
import Header from "./Header";
import PageNav from "./PageNav";
import Footer from "./Footer";
import Results from "./Results";

function App() {
    const [searchResults, setResults] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");
    const [pageState, setPageState] = useState({currentPage: 0, totalPages: 0});

    function handleSearch(searchTitle) {
      setCurrentSearch(searchTitle)
      axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: searchTitle, type: "movie"}}).then((res) => {
        if (res.data.Response !== "False") {
          setResults(res.data.Search);
          const totalPages = Math.ceil(res.data.totalResults/10);
          setPageState({
            currentPage: 1,
            totalPages: totalPages
          })
        } 
        console.log(res);
      });
    }

    function navigateNextPage() {
      if (pageState.currentPage < pageState.totalPages) {
        axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: currentSearch, type: "movie", page: pageState.currentPage+1}}).then((res) => {
        if (res.data.Response !== "False") {
          setResults(res.data.Search);
          const totalPages = Math.ceil(res.data.totalResults/10);
          setPageState({
            currentPage: pageState.currentPage+1,
            totalPages: totalPages
          });
        } 
        console.log(res);
        });
      }
    }

    function navigatePrevPage() {
      if (pageState.currentPage > 0) {
        axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: currentSearch, type: "movie", page: pageState.currentPage-1}}).then((res) => {
        if (res.data.Response !== "False") {
          setResults(res.data.Search);
          const totalPages = Math.ceil(res.data.totalResults/10);
          setPageState({
            currentPage: pageState.currentPage-1,
            totalPages: totalPages
          });
        } 
        console.log(res);
        });
      }
    }

    function navigateToFirstPage() {
      axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: currentSearch, type: "movie", page: 1}}).then((res) => {
        if (res.data.Response !== "False") {
          setResults(res.data.Search);
          const totalPages = Math.ceil(res.data.totalResults/10);
          setPageState({
            currentPage: 1,
            totalPages: totalPages
          });
        } 
        console.log(res);
      });
    }

    function navigateToLastPage() {
      axios.get("http://www.omdbapi.com/?apikey="+ omdbApiKey +"&", {params: {s: currentSearch, type: "movie", page: pageState.totalPages}}).then((res) => {
        if (res.data.Response !== "False") {
          setResults(res.data.Search);
          const totalPages = Math.ceil(res.data.totalResults/10);
          setPageState({
            currentPage: totalPages,
            totalPages: totalPages
          });
        } 
        console.log(res);
      });
    }

    return <div>
    <Header onSearch={handleSearch}/>
    {pageState.currentPage > 0 && <PageNav pageState={pageState} onNext={navigateNextPage} onPrev={navigatePrevPage} onFirst={navigateToFirstPage} onLast={navigateToLastPage}/>}
    {searchResults !== undefined && <Results searchResults={searchResults}/>}
    <Footer /></div>
}

export default App;