import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './formbusqueda.css'

class FormBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.filtrarPeliculas(this.state.valorInput))
    }

    render(){
        return(
            <form
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca una pelicula" />
                <Link to={`/resultadosBusqueda/${this.state.valorInput}`}>
                    <button type="submit">Buscar</button>
                </Link>
            </form>
        )
    }
}

export default FormBusqueda