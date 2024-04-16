import { Component } from "react";
import filtrador from "./filtrador.css";

class Filtrador extends Component {
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
                onSubmit={(event)=> this.evitarSubmit(event)}>
                <input
                type = "text"
                onChange={(event)=> this.guardarValor(event)}
                value = {this.state.valorInput}
                placeholder="Busca tu pelicula" />
            </form>
        )
    }
}

export default Filtrador