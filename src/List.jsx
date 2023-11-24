import React from "react";
import "./styles/List.css";
import Movie from "./Movie";
import readMovies from "./data/movies.json";

function List(props) {
    return (
        <div id="list">
            <div id="list-heading">
                <h1>Lista filmów</h1>
            </div>
            <div id="movies">
                {props.displayedMovies.map((x, _i) => {
                    return <Movie data={readMovies[x]} />
                })}
            </div>
            <div id="button">
                <button onClick={props.addMovies}>Wczytaj kolejne 10 filmów</button>
            </div>
        </div>
    );
}

export default List;