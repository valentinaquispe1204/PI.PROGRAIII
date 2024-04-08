import React, { Component } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import PeliculasPop from "../../Components/PeliculasPop/PeliculasPop"
import CartelContenedor from "../../Components/CartelContenedor/CartelContenedor";

let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular";
let PeliculasCartel = "https://api.themoviedb.org/3/movie/now_playing";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmPopulares: [],
      filmsCartel: [],
      pText: "Ver Todas"
    };
  }

  componentDidMount() {
    this.traerPopulares();
    this.traerCartelera();
  }

  traerPopulares() {
    fetch(PeliculasPopulares)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          filmPopulares: data.results.slice(0, 5)
        });
      })
      .catch(error => console.log(error));
  }

  traerCartelera() {
    fetch(PeliculasCartel)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          filmsCartel: data.results.slice(0, 5)
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <main>
        <h2 className="titlePopulares">Peliculas Populares</h2>
        <button>
          <Link to={"/sitePopulares"}>{this.state.pText}</Link>
        </button>
        <PeliculasPop filmPopulares={this.state.filmPopulares} />
        <h2 className="titleDeCarteleras">Peliculas en Cartelera</h2>
        <button>
          <Link to={"/siteCarteleraFilms"}>{this.state.pText}</Link>
        </button>
        <CartelContenedor filmsCartel={this.state.filmsCartel} />
      </main>
    );
  }
}

export default Home;
