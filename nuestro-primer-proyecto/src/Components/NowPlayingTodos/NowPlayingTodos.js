import React, { Component } from "react";
import Filtrador from "../Filtrador/Filtrador";
import MovieCard from "../NowPlayingCard/NowPlayingCard"
import nowplayingtodos from "./nowplayingtodos.css"

class NowPlayingTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NowPlayingTodos: [],
            favoritos : localStorage.getItem('favoritos')? JSON.parse(localStorage.getItem('favoritos')) :[],
            peliculas : [],
            backup:[],
            page : 1
        }
    }
    componentDidMount(){
        console.log('state todos', this.state.favoritos)
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                NowPlayingTodos : data.results,
                backup : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))
    }

    componentDidUpdate(){
        console.log('state del update', this.state)
    }
    
    filtrarPeliculas(valorInput){
      let peliculasFiltradas = this.state.backup.filter(
          (elm)=> elm.title.toLowerCase().includes(valorInput.toLowerCase())
          )
      this.setState({
          NowPlayingTodos: peliculasFiltradas
      })
  }

    updateStateFavs(array){
        this.setState({
          favoritos: array
        })
      }
    
render() {
    let LasQueMuestroTodas = this.state.NowPlayingTodos
    return (
      <div className = "NowPlaying">
        {console.log(LasQueMuestroTodas)}
        <h1 className="titulo">THIS IS ALL IN NOW PLAYING</h1>
        <Filtrador 
            filtrarPeliculas={(valorInput)=>this.filtrarPeliculas(valorInput)}
        />
        {
            LasQueMuestroTodas.length > 0 ? 
            LasQueMuestroTodas.map((elm, idx) => 
            <MovieCard 
            key = {idx + elm.title}
            data = {elm}
            estaEnFavorito = {this.state.favoritos.includes(elm.id)}
            updateStateFavs = {(array) => this.updateStateFavs(array)}

            className= "cards" />):
            <h3>Cargando...</h3> 
        }
      </div>
    )
  }
}

export default NowPlayingTodos;