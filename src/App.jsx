import React from "react";
import { useState } from "react";
import Header from "./Header";
import SearchForm from './SearchForm';
import List from './List';
import Footer from "./Footer";

function App() {
    const [displayedMovies, setDisplayedMovies] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [movieCount, setMovieCount] = useState(10);
    const [movieTitle, setMovieTitle] = useState("kaktus");
    const addMovies = () => {
        setMovieCount(movieCount + 10);
        setDisplayedMovies([...Array(movieCount + 10).keys()]);
    };
    const filterMovies = () => {
        console.log(movieTitle); 
    };
    return (
        <div>
            <Header></Header>
            <SearchForm filterMovies={filterMovies} movieTitle={movieTitle} setMovieTitle={setMovieTitle}></SearchForm>
            <List displayedMovies={displayedMovies} addMovies={addMovies}></List>
            <Footer></Footer>
        </div>
    );
}

export default App;