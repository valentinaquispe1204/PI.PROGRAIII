import React, {Component}from 'react';
import { Link } from "react-router-dom"



class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

render(){
    return (
   <article className= "card">
        <img src={this.props.data.poster_path} alt=""/>
        <h2>{this.props.data.title}</h2>
               
   </article>
)
   
}
}

export default MovieCard;