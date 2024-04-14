import React, { Component } from "react";
import DetalleCard from "../../Components/DetalleCard/DetalleCard";


class DetallePelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmInfo: null,
      id: this.props.match.params.id
    }
    }

  render() {
    return (
        <div>
      <DetalleCard match={this.props.match} />
        </div>
    );
  }
}



export default DetallePelicula;
