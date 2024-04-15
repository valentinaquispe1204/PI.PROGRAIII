import React, { Component } from 'react'
import './formfiltro.css'

class FormFiltro extends Component {
    constructor(props) {
        super(props)
        this.state={
            valorInput: ''
        }
    }

    evitarSubmit(evento){
        evento.preventDefault()
    }

    guardarValor(evento){
        this.setState({
            valorInput: evento.target.value
        },
        ()=> this.props.filtrarPeliculas(this.state.valorInput))
    }

    render() {
        return (
            <form
            onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input 
                onChange={(evento)=>this.guardarValor(evento)}
                placeholder='Busca una pelicula'/>
            </form>
        )
    }
}

export default FormFiltro