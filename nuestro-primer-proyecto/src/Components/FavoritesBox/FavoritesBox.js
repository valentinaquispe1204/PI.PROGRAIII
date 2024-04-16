import React, {Component}from 'react';
import favoritesbox from "./favoritesbox.css"
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import NowPlayingCard from '../../Components/NowPlayingCard/NowPlayingCard'

// import Favoritos from '../../screens/Favoritos/Favoritos';


class FavoritesBox extends Component {
    constructor(props){ 
      super(props)
      this.state = {
        favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) :[],
      }
    }
    componentDidMount(){
      if(this.state.favoritos !== null){
        let storageParse = JSON.parse(this.state.favoritos)
        
        Promise.all(
          storageParse.map((elm) => fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=04a9b8ef48334e7e5aecb64a2895739c`)
          .then(resp => resp.json())
          )
        )
        //.then((data) => console.log(data))
        .then((data) => this.setState({peliculas: data}, ()=> console.log( 'log de favoritos',this.state.peliculas)))
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
        <div className = "FavoritesBox">
          <h1>Mis pelis favoritas</h1>
        
          {
          this.state.peliculas.length > 0 
          ?
          this.state.peliculas.map((elm, idx) => <NowPlayingCard
          key = {`${idx}-${elm.name}`}
          data = {elm}
          estaEnFavorito = {true}
          updateStateFavs = {(array) => this.updateStateFavs(array)}
          />)
          :
          <h1>No tenes ninguna peli favorita aun</h1>
        }

      </div>
      
        // <section className='FavoritesBox'>
        //   <h1>Mis pelis favoritas</h1>
        //   <FavoritesCard/>

        // </section>
      )
    }
  }

export default FavoritesBox
  