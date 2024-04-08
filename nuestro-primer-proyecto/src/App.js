import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Search from "./Components/Search/Search"
import PeliculasPopulares from './Components/PeliculasPopulares/PeliculasPopulares';

function App() {

  return (
    <React.Fragment>
    <div className="App" >
       <Header />
       <Switch>
        <Home/>
      <Route path="/" exact={true} component={Home}/>
      </Switch>
      </div>

     </React.Fragment>
  );
}
export default App;
