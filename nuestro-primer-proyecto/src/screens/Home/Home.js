import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../Components/NowPlayingCard/NowPlayingCard";
import TopRated from "../../Components/TopRated/TopRated";
import NowPlaying from "../../Components/NowPlaying/NowPlaying";
import home from "./home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDeNowPlaying: [],
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
                <h3>BUSCAR LAS PELIS</h3>

        <section>
          <h1 className="titulo">NOW PLAYING</h1>
          <NowPlaying />
          <h1 className="titulo">TOP RATED</h1>
          <TopRated />
        </section>
      </main>
    
    );
  }
 

}

export default Home;
