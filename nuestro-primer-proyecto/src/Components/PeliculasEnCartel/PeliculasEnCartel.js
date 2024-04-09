import React, {Component} from "react"
import PeliculasPopulares from "../PeliculasPopulares/PeliculasPopulares";
import PelisTop from "../PelisTop/PelisTop"

class PeliculasEnCartel extends Component{
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        };
    
    }
    render(){
        return(
            <section>
                {this.props.arrayDePelisPopulares.length

                }



            </section>
            
        )
    }

}

export default PeliculasEnCartel;