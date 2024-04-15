import React, {Component}from 'react';
import favoritesbox from "./favoritesbox.css"
import FavoritesCard from '../FavoritesCard/FavoritesCard';
// import Favoritos from '../../screens/Favoritos/Favoritos';


class FavoritesBox extends Component {
    constructor(props){ 
      super(props)
    }
    
    render() {
      return (

        <section className='FavoritesBox'>
          <h1>Mis pelis favoritas</h1>
          <FavoritesCard/>

        </section>
      )
    }
  }

export default FavoritesBox
  