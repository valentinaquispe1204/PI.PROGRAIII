import React, { Component } from "react";
import TopRatedCard from "../TopRatedCard/TopRatedCard";
import toprated from "./toprated.css"

class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRated: [],
            favoritos: localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) :[],
            page: 1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=04a9b8ef48334e7e5aecb64a2895739c")
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            this.setState ({
                TopRated : data.results
            })
            console.log(data)
        })
        .catch(er => console.log(er))
    }

    updateStateFavs(arrayStorageFavs){
        this.setState({
            favoritos: arrayStorageFavs
        })
    }
    
render() {
    let LasQueMuestro = this.state.TopRated.slice(0,5)
    
    return (
      <div className = "TopRated">
        {console.log(LasQueMuestro)}
        {
            LasQueMuestro.length > 0 ? 
            LasQueMuestro.map((elm, idx) => 
            <TopRatedCard
            key = {idx + elm.title}
            data = {elm}

            estaEnFavorito = {this.state.favoritos.includes(elm.id)}
            updateStateFavs = {(array) => this.updateStateFavs(array)}

            className= "cards"
            />) : 
            <h3> Cargandoo ... </h3>

        }
      </div>
    )
  }
}

export default TopRated;