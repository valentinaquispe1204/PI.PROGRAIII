import React, { Component } from "react";


class PeliculasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular").then(resp => resp.json()).then(data =>{
            this.setState ({
                popular : data.results.slice(0,10)
            })
        })
        .catch(err => console.log(err))

    }
    masPopulares(){
        fetch("https://api.themoviedb.org/3/movie/popular?page=" + (this.state.page + 1))
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                popular: this.state.popular.concat(data.results),
                page: this.state.page + 1
            })
        })
        .catch(err => console.log(err))

    }
render() {
    return (
      <div>
        <h2>
            TodasPopulares
        </h2>
        <PeliculasPopulares popular = {this.state.populares}/>
        <button onClick={this.masPopulares()}>ver mas </button>
      </div>
    )
  }
}

export default PeliculasPopulares;