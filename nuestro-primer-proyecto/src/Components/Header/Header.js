import React from "react";
import Search from "../Search/Search"

function Header(props) {
    let menu = [
        {
            nombre: "Home",
            ruta: '/',
        },
        {
            nombre: "Peliculas en cartel",
            ruta: "/CartelContenedor",
        },
        {
            nombre: "Peliculas más populares",
            ruta: '/PeliculasPopulares',
        },
        {
            nombre: 'Favoritos',
            ruta: '/Favoritos',
        }
    ] 


    return (
    <header> <img className="logoHeader" src="./img/LogoSolo.png" alt="logo" />


    <ul>
    <li><a>Home</a></li>
    <li><a>Favoritos</a></li>
    <li><a>Peliculas mas populares</a></li>
</ul>
    <Search/>
    </header>
  )
}


export default  Header;