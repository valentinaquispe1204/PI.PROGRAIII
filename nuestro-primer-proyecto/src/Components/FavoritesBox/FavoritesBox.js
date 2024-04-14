import React, {Component}from 'react';
import favoritesbox from "./favoritesbox.css"
import FavoritesCard from '../FavoritesCard/FavoritesCard';



class FavoritesBox extends Component {
    constructor(props){ 
      super(props)
    }
    
    render() {
      return (

        <section className='FavoritesBox'>
          <FavoritesCard/>
          <h1>FAVORITES</h1>
          <button className='RemoveFavs'>Sacar de favoritos</button>

        </section>
      )
    }
  }

export default FavoritesBox
  