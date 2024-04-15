import React, { Component } from "react";
import MovieCard from "../../Components/NowPlayingCard/NowPlayingCard";
import NowPlayingTodos from "../../Components/NowPlayingTodos/NowPlayingTodos";
import NowPlaying from "../../Components/NowPlaying/NowPlaying";
import NowPlayingCard from "../../Components/NowPlayingCard/NowPlayingCard"
import nowplayingvista from "./nowplayingvista.css"

class NowPlayingVista extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NowPlayingPeliculas: null,
      favoritos : localStorage.getItem('favoritos'),
      peliculas : []
      }
    }

    componentDidMount(){
      // algo aca
    }
  
    updateStateFavs(array){
      this.setState({
        peliculas: array
      })
    }

  render() {
    return (
      <main>
        <section>
          <h1 className="titulo">SEE ALL IN NOW PLAYING</h1>

          {/* <NowPlayingTodos 
          pasarle como props la funcion updateStateFavs
          /> */}
      
        </section>
        </main>
    );
  }
}



export default NowPlayingVista;
