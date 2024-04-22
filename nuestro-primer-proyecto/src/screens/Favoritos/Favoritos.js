import React, { Component } from 'react'
import FavoritesBox from '../../Components/FavoritesBox/FavoritesBox'

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
        {
          this.state.favoritos.length > 0 ? 
          <FavoritesBox/>
          :
          <h1>No tenes ninguna peli favorita aun</h1>
        }
        
        
      </div>

    )
  }
}

export default Favoritos