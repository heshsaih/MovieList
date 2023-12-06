import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import SearchForm from './SearchForm';
import List from './List';
import Footer from "./Footer";
import Genres from "./Genres";
import Casting from "./Casting";
import readMovies from "./data/movies.json";
import * as Underscore from "underscore";

readMovies = Underscore.shuffle(readMovies);

function App() {
    const [displayedMovies, setDisplayedMovies] = useState(Underscore.range(10));
    const [movieCount, setMovieCount] = useState(10);
    const [moviesByGenres, setMoviesByGenres] = useState([]);
    const [moviesByCasting, setMoviesByCasting] = useState([]);
    const [formData, setFormData] = useState({
        "title": "",
        "yearFrom": NaN,
        "yearTo": NaN,
        "casting": ""
    });

    const updateGlobalFormData = (newData) => {
        setFormData(newData);
    };
    
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
                "movies": movies.sort()
            });
        });
        setMoviesByGenres(Underscore.sortBy(groupedMovies, (element) => element.genre));
        console.log(groupedMovies);
    };

    const groupMoviesByCasting = () => {
        const casting = [];
        displayedMovies.forEach(index => {
            const movie = readMovies[index];
            movie.cast.forEach(element => {
                if (!Underscore.contains(casting, element)) {
                    casting.push(element);
                }
            });
        });
        const groupedMovies = [];
        casting.forEach(actor => {
            const movies = [];
            displayedMovies.forEach(index => {
                const movie = readMovies[index];
                if (movie.cast.join().toLowerCase().includes(actor.toLowerCase())) {
                    movies.push(index);
                }
            });
            groupedMovies.push({
                "casting": actor,
                "movies": movies.sort()
            });
        });
        setMoviesByCasting(Underscore.sortBy(groupedMovies, (element) => element.casting));
        console.log(groupedMovies);
    };

    useEffect(() => groupMoviesByGenres(), [displayedMovies]);
    useEffect(() => filterMovies(formData), [movieCount]);
    useEffect(() => filterMovies(formData), [formData]);
    useEffect(() => groupMoviesByCasting(), [displayedMovies]);

    return (
        <div>
            <Header></Header>
            <SearchForm filterMovies={filterMovies} updateGlobalFormData={updateGlobalFormData}></SearchForm>
            <List displayedMovies={displayedMovies} addMovies={addMovies} readMovies={readMovies} movieCount={movieCount}></List>
            <Genres moviesByGenres={moviesByGenres} readMovies={readMovies}></Genres>
            <Casting moviesByCasting={moviesByCasting} readMovies={readMovies}></Casting>
            <Footer></Footer>
        </div>
    );
}

export default App;