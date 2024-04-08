import React, {Component}from 'react';
import { Link } from "react-router-dom"

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
    return ("mica")
}
}

export default CardPelicula;