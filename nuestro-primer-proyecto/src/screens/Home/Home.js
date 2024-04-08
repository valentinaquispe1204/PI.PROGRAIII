import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search"
import CardPelicula from "../../Components/CardPelicula/CardPelicula";

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
      <main>
      <h3>Buscar todas las peliss</h3>
      <Search/>

      <h3>
          PeliculasPopulares{" "}
          <button className="linkadetalle">
            <Link to="/PeliculasPopulares" className="linkfavoritos">
              See all
            </Link>
          </button>
        </h3>

      <CardPelicula
      arrayMovies={this.state.arrayDePelisPopulares}
      mostrarCinco={true}
    />


      </main>
      
      


    );
  }


}

export default Home;
