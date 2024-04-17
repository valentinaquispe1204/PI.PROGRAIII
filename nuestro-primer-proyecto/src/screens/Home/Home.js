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
  render() {
    return (
      <main>
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
