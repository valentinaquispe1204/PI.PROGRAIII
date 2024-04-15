import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"
import Footer from './Components/Footer/Footer';
import Favoritos from './screens/Favoritos/Favoritos';
import NotFound404 from './Components/NotFound404/NotFound404';
import NowPlayingTodos from './Components/NowPlayingTodos/NowPlayingTodos';
import TopRatedTodos from './Components/TopRatedTodos/TopRatedTodos';


function App() {

  return (
    <React.Fragment>
      <Header />


      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula}/>

        <Route path="/favorites" component={Favoritos}/>
        <Route path="/NowPlayingVista" component={NowPlayingTodos} />
        <Route path="/TopRatedVista" component={TopRatedTodos} />

        {/* Error va al final y sin path */}
        <Route component={NotFound404}/>
      </Switch>

      <Footer />
     </React.Fragment>
    
  );
}
export default App;
