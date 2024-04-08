import React, {Component}from 'react';
import { Link } from "react-router-dom"
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PelisTop from "../PelisTop/PelisTop"


class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas : 0
        }
    }
    VerDescripcion (){
        this.setState({VerMas:1})
    }
    OcultarDescripcion() {
        this.setState({VerMas:0})
    }


render(){
    return (
   "hola"
)
   
}
}

export default CardPelicula;