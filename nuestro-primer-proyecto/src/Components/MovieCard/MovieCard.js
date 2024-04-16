import React, {Component}from 'react';
import { Link } from "react-router-dom"
import moviecard from "./moviecard.css";


class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

render(){
    return (
   <article className= "card">
{/*         <img src={this.props.data.poster_path} />
 */}        <h2  className='tituloCard'>{this.props.data.title}</h2>
        <img className="cincoCard"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
        
               
   </article>
)
   
}
}

export default MovieCard;