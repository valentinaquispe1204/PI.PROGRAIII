import React, { Component } from "react";
import MovieCard from "../NowPlayingCard/NowPlayingCard"
import nowplaying from "./nowplaying.css"

class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NowPlaying: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                NowPlaying : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))

    }
    
render() {
    let LasQueMuestro = this.state.NowPlaying.slice(0,5)
    return (
      <div className = "NowPlaying">
        {console.log(LasQueMuestro)}
        {
            LasQueMuestro.length > 0 ? 
            LasQueMuestro.map((elm, idx) => 
            <MovieCard 
            key = {idx + elm.title}
            data = {elm}
            className= "cards" />) : 
            <h3> Cargando ... </h3>
        }
      </div>
    )
  }
}

export default NowPlaying;