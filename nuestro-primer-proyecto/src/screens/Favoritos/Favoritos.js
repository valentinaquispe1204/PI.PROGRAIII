import React, { Component } from 'react'
import FavoritesBox from '../../Components/FavoritesBox/FavoritesBox'
import NowPlayingCard from '../../Components/NowPlayingCard/NowPlayingCard'

class Favoritos extends Component {

  constructor(props){
    super(props)
    this.state = {
      favoritos : localStorage.getItem('favoritos'),
      peliculas : []
    }
  }


  render() {
    return (
      <div>
        <FavoritesBox/>
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

    )
  }
}

export default Favoritos