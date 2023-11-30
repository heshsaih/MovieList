import React from "react";
import { useState } from "react";
import Header from "./Header";
import SearchForm from './SearchForm';
import List from './List';
import Footer from "./Footer";
import readMovies from "./data/movies.json";
import * as Underscore from "underscore";

readMovies = Underscore.shuffle(readMovies);

function App() {
    const [displayedMovies, setDisplayedMovies] = useState(Underscore.range(10));
    const [movieCount, setMovieCount] = useState(10);
    const addMovies = () => {
        setMovieCount(movieCount + 10);
        setDisplayedMovies(Underscore.range(movieCount + 10));
    };
    const filterMovies = (formData) => {
        let filteredMovies = Underscore.range(movieCount);
        if (formData.title !== "") {
            filteredMovies = Underscore.filter(filteredMovies, (index) => {
                const movie = readMovies[index];
                return movie.title.toLowerCase().includes(formData.title.toLowerCase());
            });
        }
        if (!Number.isNaN(formData.yearFrom)) {
            filteredMovies = Underscore.filter(filteredMovies, (index) => {
                const movie = readMovies[index];
                return movie.year >= formData.yearFrom;
            });
        }
        if (!Number.isNaN(formData.yearTo)) {
            filteredMovies = Underscore.filter(filteredMovies, (index) => {
                const movie = readMovies[index];
                return movie.year <= formData.yearTo;
            });
        }
        setDisplayedMovies(filteredMovies);
    };
    return (
        <div>
            <Header></Header>
            <SearchForm filterMovies={filterMovies}></SearchForm>
            <List displayedMovies={displayedMovies} addMovies={addMovies} readMovies={readMovies}></List>
            <Footer></Footer>
        </div>
    );
}

export default App;