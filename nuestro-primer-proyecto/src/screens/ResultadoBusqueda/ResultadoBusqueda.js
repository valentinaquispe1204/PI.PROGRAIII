import React from 'react';
import { Component} from 'react';
import Buscador from '../../Components/Buscador/Buscador';
import FavoritesCard from '../../Components/FavoritesCard/FavoritesCard';



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
          favoritos: localStorage.getItem('favoritos') !== null? localStorage.getItem('favoritos') : []
        };
      }

      componentDidMount () {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&api_key=7384aa0b23ce68ba408f9921ee711e62`)
        .then(res => res.json())
        .then( data  => this.setState({ peliculas: data.results}))
        .then( e => console.log(e))
    

      }
 
    render(){
        return(
            <div>
                {console.log(this.state.peliculas)}
                
                {this.state.peliculas.map ((elm,idx) => <FavoritesCard actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={this.state.favoritos.includes(elm.id)} data= {elm}  key={idx + elm.title}/>)}
                
            </div>
        )
    }

}
export default ResultadoBusqueda;