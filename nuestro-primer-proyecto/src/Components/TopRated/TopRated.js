import React, { Component } from "react";
import CardPelicula from "../MovieCard/MovieCard";

class PelisPop extends Component {
    constructor() {
      super();
      this.state = {
        peliculas: [],
        filtraste: false,
        paginaPelis: 1,
        nextPage: 0,
      };
    }
  
    componentDidMount() {
      console.log("En componentDidMount");
      this.cargarPeliculas();
    }
  
    cargarPeliculas() {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=04a9b8ef48334e7e5aecb64a2895739c${this.state.paginaPelis}`
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            paginaPelis: this.state.paginaPelis + 1,
          })
          
        )
        .catch((e) => console.log(e));
        
    }
  
    filtrarPeliculas = (textoAFiltrar) => {
      console.log(textoAFiltrar);
      //  Desarrollar el método
      let pelisFiltradas = this.state.peliculas.filter(function (unaPelicula) {
        //tenemos que chequear si el texto a filtrar está dentro del nombre del personaje. Usemos la funcuión includes()
        return unaPelicula.title
          .toUpperCase()
          .includes(textoAFiltrar.toUpperCase());
      });
      console.log(pelisFiltradas);
  
      this.setState({
        peliculas: pelisFiltradas,
        filtraste: true,
      });
    };
  
    render() {
      console.log(this.state.paginaPelis);
      return (
        <main>
          <h1>Popular movies</h1>
          {this.state.filtraste ? (
            <h2>Can't load more after filter!</h2>
          ) : (
            <button
              onClick={() => this.cargarPeliculas()}
              className="linkadetalle"
            >
              Show more
            </button>
          )}
          
          
  
          <section className="seccionPeliSerie">
            <CardPelicula
              arrayMovies={this.state.peliculas}
              mostrarCinco={false}
            />
          </section>
          {this.state.filtraste ? (
            <h2>Can't load more after filter!</h2>
          ) : (
            <button
              onClick={() => this.cargarPeliculas()}
              className="linkadetalle"
            >
              Show more
            </button>
          )}
        </main>
      );
    }
  }
  
  export default PelisPop;