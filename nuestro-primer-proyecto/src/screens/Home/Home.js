import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search"
import PeliculasPopulares from "../../Components/PeliculasPopulares/PeliculasPopulares"
import CartelContenedor from "../../Components/CartelContenedor/CartelContenedor"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDePelisPopulares: [],
      arrayDePeliCartel : [],
      loading: true,
    };
  }
  componentDidMount() {
  
    console.log("Estamos en componentDidMount");
    let urlPelisPopulares =
    "https://api.themoviedb.org/3/movie/popular";
  let urlPelisTop =
  "https://api.themoviedb.org/3/movie/now_playing"
  fetch(urlPelisPopulares)
  .then((response) => response.json())
  .then((data) =>
    this.setState({
      arrayDePelisPopulares: data.results,
      loading: false,
    })
  )
  .catch((e) => console.log(e));

  }
}


export default Home;