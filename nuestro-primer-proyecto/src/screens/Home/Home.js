import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search"
import CardPelicula from "../../Components/CardPelicula/CardPelicula";
import PelisTop from "../../Components/PelisTop/PelisTop";
import PeliculasPopulares from "../../Components/PeliculasPopulares/PeliculasPopulares";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDePelisPopulares: [],
      arrayDePelisTopRated: [],
      loading: true,
    };
  }
  componentDidMount() {
    console.log("Estamos en componentDidMount");
    let urlPelisPopulares =
      "https://api.themoviedb.org/3/movie/popular?api_key=04a9b8ef48334e7e5aecb64a2895739c";
    let urlPelisTop =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=04a9b8ef48334e7e5aecb64a2895739c";
    fetch(urlPelisPopulares)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          arrayDePelisPopulares: data.results,
          loading: false,
        })
      )
      .catch((e) => console.log(e));
    fetch(urlPelisTop)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          arrayDePelisTopRated: data.results,
          loading: false,
        })
      )
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="PadreSecciones">
              
      <main>
    <br></br>
    <br></br>
      <h3>Buscar las pelis</h3>
      <Search/>
      <h3>
          PeliculasPopulares{" "}
          <button className="linkadetalle">
            <Link to="/PeliculasPopulares" className="linkfavoritos">
              Ver todas
            </Link>
          </button>
        </h3>

        <CardPelicula
          arrayMovies={this.state.arrayDePelisPopulares}
          mostrarCinco={true}
        />
         <h3>
          Top Rated Movies{" "}
          <button className="linkadetalle">
            <Link to="/toprated" className="linkfavoritos">
              Ver todas
            </Link>
          </button>
        </h3>
        <CardPelicula
          arrayMovies={this.state.arrayDePelisTopRated}
          mostrarCinco={true}
        
        />
      </main>
      </div>
     
    
    );
  }
 

}

export default Home;
