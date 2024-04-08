import react, {Component} from "react";

class CardPelicula extends Component {
    
        constructor(props){
            super(props)
            this.state = { peliculas : []}
        }
        componentDidMount(){
                fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62")
                .then( response => response.json())
                .then(data => console.log(data))
                .catch( error => console.log("el error fue" + error))
            }

            render(){
        return ("probando")
    }
    
}

export default CardPelicula;