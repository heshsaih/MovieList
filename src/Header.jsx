import React from "react";
import "./styles/Header.css";

function Header() {
    return (
        <div id="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-film" viewBox="-2 -2 20 20">
                <path stroke="black" stroke-width="0.3px" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
            </svg>
            <h1 className="title">Baza filmów</h1>
        </div>
    );
}

export default Header;