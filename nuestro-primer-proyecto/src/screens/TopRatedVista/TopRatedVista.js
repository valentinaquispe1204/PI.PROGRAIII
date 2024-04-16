import React, { Component } from "react";
import DetalleCard from "../../Components/DetalleCard/DetalleCard";
import NowPlayingTodos from "../../Components/NowPlayingTodos/NowPlayingTodos";
import TopRatedTodos from "../../Components/TopRatedTodos/TopRatedTodos";
import topratedvista from "./topratedvista.css"

class TopRatedVista extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TopRatedPeliculas: null,
    }
    }

  render() {
    return (
      <main>
      <section>
      <h1 className="titulo"> SEE ALL IN NOW PLAYING </h1>

      <TopRatedTodos />
      </section>
      </main>
    );
  }
}



export default TopRatedVista;
