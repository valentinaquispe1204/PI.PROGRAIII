import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"
import { Switch, Route } from "react-router-dom";
import PeliculasPopulares from './Components/PeliculasPopulares/PeliculasPopulares';

function App() {

  return (
    <div>
      <Header />
      <PeliculasPopulares/>
      </div>
  );
}
export default App;
