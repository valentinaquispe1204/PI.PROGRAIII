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
      peliculas: array
    })
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