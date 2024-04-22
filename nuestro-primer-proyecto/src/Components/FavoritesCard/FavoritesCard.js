 import React, { Component } from "react";
import { Link } from "react-router-dom"
import favoritescard from "./favoritescard.css"
//import DetalleCard from "../DetalleCard/DetalleCard"

class FavoritesCard extends Component {
    constructor(props) {
        super(props)
    }

// metodo para el boton de agregar favoritos
agregarFavs(idPelicula){
  let storageFavs = localStorage.getItem('favoritos')
 // si es distinto a null es porque ya habia algo en el storage
  if(storageFavs !== null){
      let storageParse = JSON.parse(storageFavs)
      storageParse.push(idPelicula)
      this.props.updateStateFavs(storageParse)
      let storageToString = JSON.stringify(storageParse)
      localStorage.setItem('favoritos', storageToString)
  } else{
      // agregando al array
      let arrayFavs = [idPelicula]
      this.props.updateStateFavs(arrayFavs)
      let arrayToStringFavs = JSON.stringify(arrayFavs)
      localStorage.setItem('favoritos', arrayToStringFavs)
  }
}

// metodo para el boton de sacar favoritos
sacarFavs(idPelicula){
  let storage = localStorage.getItem('favoritos')
  let storageParse = JSON.parse(storage)
  let storageFilter = storageParse.filter((elm) => elm !== idPelicula)
  //antes de stringificar hay que actualizar el estado de los favoritos
  this.props.updateStateFavs(storageFilter)
  let storageToString = JSON.stringify(storageFilter)
  localStorage.setItem('favoritos', storageToString)
}

render(){

    return (
      // la card de la pelicula que esta en favoritos
      <article className = "FavoritesCard">
        <Link to={"/DetallePelicula/id/" + this.props.data.id} >
          <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
          <h2>{this.props.data.title}</h2>
        </Link>

        {
            this.props.estaEnFavorito ? 
            <button onClick={()=> this.sacarFavs(this.props.data.id)} className='btnfav'>Sacar de favoritos</button>
            :
            <button onClick={()=> this.agregarFavs(this.props.data.id)} className='btnfav'>Agregar a favoritos</button>
        }
      </article>
    )
  }

}

export default FavoritesCard;