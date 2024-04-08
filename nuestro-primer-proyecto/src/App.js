import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"

function App() {

  return (
    <>
      <Header />
      <Switch>
        {/* RUTAS */}
        <Route path='/' exact={true} component={Home}/>
      </Switch>

      
    </>
  );
}

export default App;
