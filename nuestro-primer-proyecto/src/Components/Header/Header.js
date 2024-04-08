import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header(props) {
   
    return (
    <header> 
        <section className="headerIzquierda">
        <img className="logoHeader" src="./img/LogoSolo.png" alt="logo" />
        <a href="/" className="nombrepagina">
        <h2 className="nombrepagina">GRAMMA PELIS</h2>
        </a>
        </section>
        <nav className="headerDerecha">
        <article className="linksHeader">
          <Link to="/favoritos" className="linkfavoritos">
            Mis favoritos
          </Link>
          <Link to="/populares" className="linkfavoritos">
            Populares
          </Link>
          <Link to="/toprated" className="linkfavoritos">
            Top rated
          </Link>
        </article>
      </nav>
    
    
   
    </header>
  )
}


export default  Header;