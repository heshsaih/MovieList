import React from "react";
import "./styles/Genres.css";

function Genres(props) {
    return (<div id="genres">
        <div id="genres-header">
            <h1>Filmy wg gatunków</h1>
        </div>
        <div id="genres-list">
            {props.moviesByGenres.map((x, _i) => {
                return (
                    <div class="genre">
                        <h1>{x.genre}</h1>
                        <ul>
                            {x.movies.map((x, _i) => {
                                return (<li>{props.readMovies[x].title}</li>);
                            })}
                        </ul>
                </div>
                );
            })}
        </div>
    </div>);
}

export default Genres;