import { Component } from 'react'


class Search extends Component {
    render() {
        return (
            <div className="formulariodeBusqueda">
                
                <form>
                    <input type="Buscar" className="Buscar" name="busqueda" placeholder="Buscar..." />
                    <button className="searchInput" type="submit"><i
                        className="fa-solid fa-magnifying-glass fa-beat-fade"></i></button>
                </form>
            </div>
        )
    }
}

export default Search
