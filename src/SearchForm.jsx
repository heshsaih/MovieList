import React from "react"; 
import "./styles/SearchForm.css";

function SearchForm(props) {
    return (
        <div id="search-form">
            <h1>Wyszukaj film</h1>
            <div>
                <div className="text-input">
                    <h2>Tytuł</h2>
                    <input id="title-input" type="text" placeholder="Podaj tytuł"/>
                </div>
                <div className="text-input">
                    <h2>Rok produkcji od</h2>
                    <input id="year-from-input" type="text" placeholder="Podaj rok z przedziału 1900-2019"/>
                </div>
                <div className="text-input">
                    <h2>Rok produkcji do</h2>
                    <input id="year-to-input" type="text" placeholder="Podaj rok z przedziału 1900-2019"/>
                </div>
                <div className="text-input">
                    <h2>Obsada</h2>
                    <input id="casting-input" type="text" placeholder="Podaj imię i nazwisko"/>
                </div>
                <div className="button-input">
                    <button id="submit-search" onClick={props.filterMovies}>Wyszukaj</button>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;