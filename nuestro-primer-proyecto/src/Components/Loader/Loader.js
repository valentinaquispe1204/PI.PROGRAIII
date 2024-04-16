import React from "react";
import {Component} from "react";

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="containerLoader" src="./img/loading.jpg" alt="cargando..." />
        );
    }
}

export default Loader;