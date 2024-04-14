import React, { Component } from "react";
import DetalleCard from "../../Components/DetalleCard/DetalleCard";
import NowPlayingTodos from "../../Components/NowPlayingTodos/NowPlayingTodos";
import nowplayingvista from "./nowplayingvista.css"

class NowPlayingVista extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NowPlayingPeliculas: null,
  
    }
    }

  render() {
    return (
      <main>
        <section>
          <h1 className="titulo">SEE ALL IN NOW PLAYING</h1>
      <NowPlayingTodos />
        </section>
        </main>
    );
  }
}



export default NowPlayingVista;
