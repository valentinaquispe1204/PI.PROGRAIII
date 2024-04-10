import React, { Component } from "react";
import NowPlayingCard from "../../Components/NowPlayingCard/NowPlayingCard";
import DetalleCard from "../../Components/DetalleCard/DetalleCard";

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pelicula :[]
    };
  }
  componentDidMount() {
    console.log("Estamos en componentDidMount en detalle pelicula");
    console.log("")
  }
  render() {
    return (
        <main>
        <section>
        <DetalleCard   id= {this.props.match.params.id}/>
          
        
        </section>
      </main>
    );
  }
 

}

export default DetallePelicula;
