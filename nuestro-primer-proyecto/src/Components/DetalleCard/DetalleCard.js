import React, { Component } from "react";
import detallecard from "./detallecard.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class DetalleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DetalleCardContenido: "",
            page: 1
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=04a9b8ef48334e7e5aecb64a2895739c`)
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                DetalleCardContenido : data
            })
            console.log(data)
        })
        .catch(er => console.log(er))

    }
    
render() {
    let DetalleCardContenido =  this.state.data

    return (

      <div className = "DetallePelicula">
        {console.log(DetalleCardContenido)
            // DetallePelicula.length > 0 ? 
            // DetallePelicula.map((elm, idx) => 
            // <MovieCard 
            // key = {idx + elm.title}
            // data = {elm}
            // className= "cards" />) : 
            // <h3> Cargando ... </h3>
        }
      </div>
    )
  }
}

export default DetalleCard;