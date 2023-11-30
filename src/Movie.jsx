import React from "react";
import "./styles/Movie.css";

function Movie({data}) {
    return (
        <div className="movie">
            <h2>{data.title}</h2>
            <ul>
                <li>Rok wydania: <span>{data.year}</span></li>
                <li>Obsada: <span>{data.cast.join(", ")}</span></li>
                <li>Gatunki: <span>{data.genres.join(", ")}</span></li>
            </ul>
            <p>{data.extract}</p>
        </div>
    )
}

export default Movie;