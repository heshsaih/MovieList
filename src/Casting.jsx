import React from "react";
import "./styles/Casting.css";

function Casting(props) {
    return (<div id="casting">
        <div id="casting-header">
            <h1>Filmy wg obsady</h1>
        </div>
        <div id="casting-list">
            {props.moviesByCasting.map((x, _i) => {
                return (
                    <div class="casting">
                        <h1>{x.casting}</h1>
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

export default Casting;