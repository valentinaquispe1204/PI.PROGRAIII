import React from "react";
import {Component} from "react";

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src="./img/cargando.gif" alt="cargando" />
        );
    }
}

export default Loader;