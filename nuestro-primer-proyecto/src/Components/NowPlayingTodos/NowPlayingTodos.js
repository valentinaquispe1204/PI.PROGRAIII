import React, { Component } from "react";
import MovieCard from "../NowPlayingCard/NowPlayingCard"
import nowplayingtodos from "./nowplayingtodos.css"

class NowPlayingTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NowPlayingTodos: [],
            page : 1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                NowPlayingTodos : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))

    }
    
render() {
    let LasQueMuestroTodas = this.state.NowPlayingTodos
    return (
      <div className = "NowPlaying">
        {console.log(LasQueMuestroTodas)}
        <h1 className="titulo">THIS IS ALL IN NOW PLAYING</h1>
        {
             LasQueMuestroTodas.length > 0 ? 
            LasQueMuestroTodas.map((elm, idx) => 
            <MovieCard 
            key = {idx + elm.title}
            data = {elm}
            className= "cards" />):
            <h3>Cargando...</h3> 
        }
      </div>
    )
  }
}

export default NowPlayingTodos;