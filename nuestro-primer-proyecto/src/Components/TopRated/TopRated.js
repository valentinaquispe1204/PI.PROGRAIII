import React, { Component } from "react";
import TopRatedCard from "../TopRatedCard/TopRatedCard";
import MovieCardTopRated from "../TopRatedCard/TopRatedCard";
import toprated from "./toprated.css"



class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRated: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                TopRated : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))

    }
    
render() {
    let LasQueMuestro = this.state.TopRated.slice(0,5)
    return (
      <div className = "TopRated">
        {console.log(LasQueMuestro)}
        {
            LasQueMuestro.length > 0 ? 
            LasQueMuestro.map((elm, idx) => 
            <TopRatedCard
            key = {idx + elm.title}
            data = {elm}/>) : 
            <h3> Cargando ... </h3>
        }
      </div>
    )
  }
}

export default TopRated;


// import React, { Component } from "react";
// import CardPelicula from "../MovieCard/MovieCard";

// class PelisPop extends Component {
//     constructor() {
//       super();
//       this.state = {
//         peliculas: [],
//         filtraste: false,
//         paginaPelis: 1,
//         nextPage: 0,
//       };
//     }
  
//     componentDidMount() {
//       console.log("En componentDidMount");
//       this.cargarPeliculas();
//     }
  
//     cargarPeliculas() {
//       fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=04a9b8ef48334e7e5aecb64a2895739c${this.state.paginaPelis}`
//       )
//         .then((response) => response.json())
//         .then((data) =>
//           this.setState({
//             peliculas: this.state.peliculas.concat(data.results),
//             paginaPelis: this.state.paginaPelis + 1,
//           })
          
//         )
//         .catch((e) => console.log(e));
        
//     }
  
//     filtrarPeliculas = (textoAFiltrar) => {
//       console.log(textoAFiltrar);
//       //  Desarrollar el método
//       let pelisFiltradas = this.state.peliculas.filter(function (unaPelicula) {
//         //tenemos que chequear si el texto a filtrar está dentro del nombre del personaje. Usemos la funcuión includes()
//         return unaPelicula.title
//           .toUpperCase()
//           .includes(textoAFiltrar.toUpperCase());
//       });
//       console.log(pelisFiltradas);
  
//       this.setState({
//         peliculas: pelisFiltradas,
//         filtraste: true,
//       });
//     };
  
//     render() {
//       console.log(this.state.paginaPelis);
//       return (
//         <main>
//           <h1>Popular movies</h1>
//           {this.state.filtraste ? (
//             <h2>Can't load more after filter!</h2>
//           ) : (
//             <button
//               onClick={() => this.cargarPeliculas()}
//               className="linkadetalle"
//             >
//               Show more
//             </button>
//           )}
          
          
  
//           <section className="seccionPeliSerie">
//             <CardPelicula
//               arrayMovies={this.state.peliculas}
//               mostrarCinco={false}
//             />
//           </section>
//           {this.state.filtraste ? (
//             <h2>Can't load more after filter!</h2>
//           ) : (
//             <button
//               onClick={() => this.cargarPeliculas()}
//               className="linkadetalle"
//             >
//               Show more
//             </button>
//           )}
//         </main>
//       );
//     }
//   }
  
//   export default PelisPop;