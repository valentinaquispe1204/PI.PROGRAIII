import React, { Component } from "react";
import favoritescard from "./favoritescard.css"

class FavoritesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          favoritos : [],
          btn : true
        }
    }

    componentDidMount(){
      console.log(this.props.data.id);
      let storageFavs = localStorage.getItem("Favorites")
      this.setState({favoritos: storageFavs})
      let arrayParse = JSON.parse(storageFavs)
      if (arrayParse !== null) {
        let Favs = arrayParse.includes(this.props.id)
        if (Favs) {
            this.setState({
                estaEnFav: true
            })
        }
    }



      this.setState = ({
        favoritos : storageFavs
      })

    }


    // metodo para agregar favoritos tiene que estar en otra pagina pero no se cual
  //   addFavs(idPelicula){
  //   let favoritosAgregados = 
  //   this.setState({
  //     favoritos: favoritosAgregados
  // })
  //   }



    // metodo para sacar favoritos
    removeFavs(idPelicula){
      let favoritosSacados = localStorage.getItem("favoritos")

      let arrayParse = JSON.parse(favoritosSacados)
      let favsFilter = arrayParse.filter((id) => id !== idPelicula)
      let arrayToString = JSON.stringify(favsFilter)
      localStorage.setItem("favoritos", arrayToString)

      this.setState({
        favoritos: favoritosSacados
    })
    }

    // metodo para sacar todos los favoritos ?
   


render(){

    return (

      <div className = "FavoritesCard">
      </div>
    )
  }

}

export default FavoritesCard;