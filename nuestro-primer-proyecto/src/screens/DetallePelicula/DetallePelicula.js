import React, { Component } from "react";
import NowPlayingCard from "../../Components/NowPlayingCard/NowPlayingCard";
import DetalleCard from "../../Components/DetalleCard/DetalleCard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
        <div>
        <DetalleCard   id= {this.props.match.params.id}/>
          
        </div>
    );
  }
}



export default DetallePelicula;
