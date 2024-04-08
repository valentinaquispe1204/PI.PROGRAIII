import React from "react";
import Search from "../Search/Search"
import "./style.css"

function Header(props) {
    return(  
        <header>
    <div>
        <ul>
            <li><a>Home</a></li>
            <li><a>Favoritos</a></li>
            <li><a>Peliculas mas populares</a></li>
        </ul>
    </div>
    <Search/>
    </header>
    );
}

export default Header