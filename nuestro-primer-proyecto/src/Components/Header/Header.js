import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Search from "../Search/Search"

function Header() {
   
    return (
    <header> 
        <section className="headerIzquierda">
        <img className="logoHeader" src="./img/LogoSolo.png" alt="logo" />
        <a href="/" className="nombrepagina">
        <h2 className="nombrepagina">GRAMA PELIS</h2>
        </a>
        </section>
        <nav className="headerDerecha">
        <article className="linksHeader">
          <Link to="/Favorites" className="linkfavoritos">
            Mis favoritos
          </Link>
          <Link to="/NowPlayingVista" className="linkfavoritos">
            Now playing
          </Link>
          <Link to="/TopRatedVista" className="linkfavoritos">
            Top rated
          </Link>
        </article>
      </nav>
    
    
      <Search/>
    </header>
  )
}


export default  Header;