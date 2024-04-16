import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import detallecard from "./detallecard.css"


class DetalleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DetalleCardContenido: []
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
        console.log(DetalleCardContenido.DetalleCardContenido.id);
         
        return (

             this.state.DetalleCardContenido.length !== 0 ?

            <div className="DetallePelicula">
                <img className="imgcardDetalle" src={`https://image.tmdb.org/t/p/w500/${DetalleCardContenido.DetalleCardContenido.poster_path}/images`} alt={DetalleCardContenido.DetalleCardContenido.title}></img>
                <p> {DetalleCardContenido.DetalleCardContenido.title}</p>
                <p>GENERO : AGREGAR GENEROS CON MAP </p>
                <p> SINOPSIS : {DetalleCardContenido.DetalleCardContenido.overview} </p>
                <p> RATING : {DetalleCardContenido.DetalleCardContenido.popularity}</p>
                <p>ESTRENO : {DetalleCardContenido.DetalleCardContenido.release_date}</p>
                <p> DURACIÓN : {DetalleCardContenido.DetalleCardContenido.runtime}</p>
            </div> :
            <h3>Loader</h3> 

                

            
        )
    }
}



export default DetalleCard;