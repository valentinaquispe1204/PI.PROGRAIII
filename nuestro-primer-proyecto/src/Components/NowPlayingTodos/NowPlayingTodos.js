import React, { Component } from "react";
import Filtrador from "../Filtrador/Filtrador";
import Loader from "../Loader/Loader";
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
            page : 0
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

      cargarMasPeliculas() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=04a9b8ef48334e7e5aecb64a2895739c&page=${(this.state.page + 1)}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                page: this.state.page + 1,
                NowPlayingTodos: this.state.NowPlayingTodos.concat(data.results),
                backup: this.state.NowPlayingTodos.concat(data.results)
            }))
            .catch(err => console.log(err))
    }
    
render() {
    let LasQueMuestroTodas = this.state.NowPlayingTodos
    console.log(this.state.NowPlayingTodos);
    return (
      <div className = "NowPlaying">
        {console.log(LasQueMuestroTodas)}
        <h1 className="titulo">THIS IS ALL IN NOW PLAYING</h1>
        <div className="filtrofacha">

            <Filtrador 
                filtrarPeliculas={(valorInput)=>this.filtrarPeliculas(valorInput)}
            />
        </div>
        <div className="cardsFacha">
        {
            LasQueMuestroTodas.length > 0 ? 
            LasQueMuestroTodas.map((elm, idx) => 
                <MovieCard 
                key = {idx + elm.title}
                data = {elm}
                estaEnFavorito = {this.state.favoritos.includes(elm.id)}
                updateStateFavs = {(array) => this.updateStateFavs(array)}

                className= "cards" />):
            <Loader/>
        }

        <div className="ContenedorBotonVerMas">
            <button className="botonVerMas" onClick={() => this.cargarMasPeliculas()}>More movies</button>
        </div>

        </div>
      </div>
    )
  }
}

export default NowPlayingTodos;