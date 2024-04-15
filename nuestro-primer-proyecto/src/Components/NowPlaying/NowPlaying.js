import React, { Component } from "react";
import MovieCard from "../NowPlayingCard/NowPlayingCard"
import nowplaying from "./nowplaying.css"

class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NowPlaying: [],
            favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) :[],
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

    updateStateFavs(arrayStorageFavs){
        this.setState({
            favoritos: arrayStorageFavs
        })
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
            
            estaEnFavorito = {this.state.favoritos.includes(elm.id)}
            updateStateFavs = {(array) => this.updateStateFavs(array)}
            
            className= "cards" />) : 
            <h3> Cargando ... </h3>
        }
      </div>
    )
  }
}

export default NowPlaying;