import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"

import Favorites from './Components/FavoritesCard/FavoritesCard';
import NotFound404 from './Components/NotFound404/NotFound404';


function App() {

  return (
    <React.Fragment>
      <Header />


      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula}/>

        <Route path="/Favorites" component={Favorites}/>

        {/* Error va al final y sin path */}
        <Route component={NotFound404}/>
      </Switch>


     </React.Fragment>
  );
}
export default App;
