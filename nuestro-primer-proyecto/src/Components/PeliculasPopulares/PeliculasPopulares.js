import React, { Component } from "react";
import TarjetaPelicula from "../CardPelicula/CardPelicula"

class PeliculasPopulares extends Component{
   constructor(){
    super()
    this.state= {peliculas:[]}
   
}

componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=04a9b8ef48334e7e5aecb64a2895739c")
    .then((response) => response.json())
/*     .then(data=>console.log(data))
 */    .then(data=> this.setState({peliculas: data.results}))
  .catch(error=> console.log(error))
}

render(){
    let favoritosCinco = this.state.peliculas.slice (0,5)
    return(
        <div className = "FavoritosCinco"> 
        {console.log(this.state.peliculas)}
        {
                                favoritosCinco.map(( elm, idx) => <TarjetaPelicula  data= {elm}  key={idx + elm.title}/>)

        }

        </div>
    )
}
}


 

export default PeliculasPopulares;