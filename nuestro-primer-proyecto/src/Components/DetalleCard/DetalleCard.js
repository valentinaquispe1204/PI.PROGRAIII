import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import detallecard from "./detallecard.css"


class DetalleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DetalleCardContenido: null
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=04a9b8ef48334e7e5aecb64a2895739c`)
            .then(resp => resp.json())
            .then(data => {
                console.log(this.props.match.params.id)
                this.setState({
                    DetalleCardContenido: data
                })
            })
            .catch(er => console.log(er))

    }

    render() {
        let DetalleCardContenido = this.state
        return (
            
            <div className="DetallePelicula">
                {console.log(DetalleCardContenido)}
                <img className="imgcard" src={`https://image.tmdb.org/t/p/w500/${DetalleCardContenido.poster_path}/images`} alt={DetalleCardContenido.title}></img>
                <p> {DetalleCardContenido.title}</p>
                {console.log(DetalleCardContenido.data)}
                <p>GENERO : AGREGAR GENEROS CON MAP </p>
                <p> SINOPSIS {DetalleCardContenido.overview}: </p>
                <p> RATING : {DetalleCardContenido.poppularity}</p>
                <p>ESTRENO : {DetalleCardContenido.release_date}</p>
                <p> DURACIÓN : {DetalleCardContenido.runtime}</p>
                

            </div>
        )
    }
}



export default DetalleCard;