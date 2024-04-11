import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import DetalleCard from './Components/DetalleCard/DetalleCard';




function App() {

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula}/>
      </Switch>


     </React.Fragment>
  );
}
export default App;
