import React, {Component}from 'react';
import { Link } from "react-router-dom"
import topratedcard from "./topratedcard.css"



class TopRatedCard extends Component {
    constructor(props) {
        super(props);
    }

render(){
    return (
   <article className= "TopRatedcard">
{/*         <img src={this.props.data.poster_path} />
 */}        <h2>{this.props.data.title}</h2>
        <img className="imgcard"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
        
               
   </article>
)
   
}
}

export default TopRatedCard;