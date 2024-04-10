import React, {Component}from 'react';
import { Link } from "react-router-dom"
import nowplayingcard from "./nowplayingcard.css";



class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

render(){
    return (
   <article className= "card">   
        <Link to={"/DetallePelicula/id/" + this.props.data.id}>
        <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
        <h2>{this.props.data.title}</h2>
        </Link>

               
   </article>
)
   
}
}

export default MovieCard;