import React, {Component}from 'react';
import favoritesbox from "./favoritesbox.css"
import FavoritesCard from '../FavoritesCard/FavoritesCard';
// import NowPlayingCard from '../../Components/NowPlayingCard/NowPlayingCard'
// import MovieCard from '../../Components/NowPlayingCard/NowPlayingCard';
// import Favoritos from '../../screens/Favoritos/Favoritos';

class FavoritesBox extends Component {
    constructor(props){ 
      super(props)
      this.state = {
        favoritos: localStorage.getItem('favoritos') ,
      }
    }

    componentDidMount(){
      if(this.state.favoritos !== null){
        let storageParse = JSON.parse(this.state.favoritos)
        
        Promise.all(
          storageParse.map((elm) => 
          fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=04a9b8ef48334e7e5aecb64a2895739c`)
          .then(resp => resp.json())
          ))
        //.then((data) => console.log(data))
        .then((data) => 
        {this.setState({favoritos: data}, ()=> console.log( 'log de favoritos', this.state.favoritos))})
        .catch((e) => console.log(e))
      }
    }
  
    updateStateFavs(array){
      this.setState({
        favoritos: array
      })
    }

    render() {
      return (
        <div>
          <h1 className='tituloFavoriteBox'>MIS FAVORITOS</h1> 
        
        <div className = "FavoritesBox">
          {console.log(this.state.favoritos)}
        </div>
          {
            // para chequear que favoritos es un array luego de la promesa, devuelve true o false
            Array.isArray(this.state.favoritos) ?
            this.state.favoritos.map((elm, idx) => 
            <FavoritesCard 
            key = {idx + elm.title}
            data = {elm}
            
            estaEnFavorito = {true}
            updateStateFavs = {(array) => this.updateStateFavs(array)}
            
            className= "cards" 
            />) : 
            <h1>No tenes ninguna peli favorita aun</h1>
        }

        </div>
      )
    }
  }

export default FavoritesBox

  