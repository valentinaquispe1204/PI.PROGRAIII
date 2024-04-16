import React, { Component } from "react";
import Filtrador from "../Filtrador/Filtrador";
import MovieCard from "../NowPlayingCard/NowPlayingCard"
import topratedtodos from "./topratedtodos.css"

class TopRatedTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRatedTodos: [],
            favoritos : localStorage.getItem('favoritos')? JSON.parse(localStorage.getItem('favoritos')) :[],
            peliculas : [],
            backup:[],
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                TopRatedTodos : data.results,
                backup : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))

    }

    filtrarPeliculas(valorInput){
        let peliculasFiltradas = this.state.backup.filter(
            (elm)=> elm.title.toLowerCase().includes(valorInput.toLowerCase())
            )
        this.setState({
            TopRatedTodos: peliculasFiltradas
        })
    }

    updateStateFavs(array){
        this.setState({
          favoritos: array
        })
      }
    
render() {
    let LasQueMuestroTodas = this.state.TopRatedTodos
    console.log(this.state.peliculas);
    return (
      <div className = "TopRated">
        {console.log(LasQueMuestroTodas)}
        <h1 className="titulo">THIS IS ALL IN TOP RATED</h1>
        <div className="filtrofacha">

        <Filtrador 
            filtrarPeliculas={(valorInput)=>this.filtrarPeliculas(valorInput)}
        />
        </div>
        <div className="cardsFacha">
        {
            this.state.TopRatedTodos.length >0 ? 
            this.state.TopRatedTodos.map((elm, idx) => 
            <MovieCard 
            key = {idx + elm.title}
            data = {elm}
            estaEnFavorito = {this.state.favoritos.includes(elm.id)}
            updateStateFavs = {(array) => this.updateStateFavs(array)}

            className= "cards" />):
            <h3>Cargando...</h3> 
        }
        </div>
      </div>
    )
  }
}

export default TopRatedTodos;