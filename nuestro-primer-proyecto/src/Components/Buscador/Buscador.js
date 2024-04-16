import React , {Component} from "react";

class Buscador extends Component {
    constructor (props) {
        super(props);
        this.state={
            valorInput:'',
            resultado:[]
        }
    }
    prevenirDefault (evento){
        evento.preventDefault();
    }
    guardarInput(evento){
        this.setState({
            valorInput: evento.target.value
        })
    }


render(){
    return(
        <form className="formbusqueda" action="./searchResults" method="get" onSubmit={(evento)=> this.prevenirDefault(evento)}>
            <input
            className="inputbusqueda"
            type="text"
            name="buscar"
            id=""
            placeholder="Search Movies"
            onChange={(evento) => this.guardarInput(evento)}
            valorInput={this.state.valorInput}
            />
            <Link to={`/searchResults/${this.state.valorInput}`}>
            <button className="submitbtn" type="submit">
            <CgSearch style={{ color: "white", fontSize: "1vw" }} />
            </button>
            </Link>
      </form>

    )
}
}
export default Buscador;


