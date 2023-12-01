import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import SearchForm from './SearchForm';
import List from './List';
import Footer from "./Footer";
import Genres from "./Genres";
import readMovies from "./data/movies.json";
import * as Underscore from "underscore";

readMovies = Underscore.shuffle(readMovies);

function App() {
    const [displayedMovies, setDisplayedMovies] = useState(Underscore.range(10));
    const [movieCount, setMovieCount] = useState(10);
    const [moviesByGenres, setMoviesByGenres] = useState([]);
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
        if (formData.casting !== "") {
            filteredMovies = Underscore.filter(filteredMovies, (index) => {
                const movie = readMovies[index];
                console.log(movie.cast.join().toLowerCase());
                return movie.cast.join().toLowerCase().includes(formData.casting.replace(", ", ""));
            });
        }
        setDisplayedMovies(filteredMovies);
    };
    const groupMoviesByGenres = () => {
        const genres = [];
        displayedMovies.forEach(index => {
            const movie = readMovies[index];
            movie.genres.forEach(element => {
                if (!Underscore.contains(genres, element)) {
                    genres.push(element);
                }
            });
        });
        const groupedMovies = [];
        genres.forEach(genre => {
            const movies = [];
            displayedMovies.forEach(index => {
                const movie = readMovies[index];
                if (movie.genres.join().toLowerCase().includes(genre.toLowerCase())) {
                    movies.push(index);
                }
            });
            groupedMovies.push({
                "genre": genre,
                "movies": movies
            });
        });
        setMoviesByGenres(groupedMovies);
        console.log(groupedMovies);
    };
    useEffect(() => groupMoviesByGenres(), [displayedMovies]);
    return (
        <div>
            <Header></Header>
            <SearchForm filterMovies={filterMovies}></SearchForm>
            <List displayedMovies={displayedMovies} addMovies={addMovies} readMovies={readMovies}></List>
            <Genres moviesByGenres={moviesByGenres} readMovies={readMovies}></Genres>
            <Footer></Footer>
        </div>
    );
}

export default App;