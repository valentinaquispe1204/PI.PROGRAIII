import React, { Component } from "react";
import favoritescard from "./favoritescard.css"

class FavoritesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    //   console.log(this.props.data.id);

     }


render(){

    return (
      // la card de la pelicula que esta en favoritos
      <article className = "FavoritesCard">
        {/* <Link to={"/DetallePelicula/id/" + this.props.data.id}>
        <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
        <h2>{this.props.data.title}</h2>
        </Link> */}
        
        {/* <button className='removeFavs'>Sacar de favoritos</button> */}

      </article>
    )
  }

}

export default FavoritesCard;