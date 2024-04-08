import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"
import { Route, Switch} from 'react-router-dom'
import Search from "./Components/Search/Search"
import PeliculasPopulares from './Components/PeliculasPopulares/PeliculasPopulares';
import PelisTop from './Components/PelisTop/PelisTop';

function App() {

  return (
    <React.Fragment>
    <div className="App" >
       <Header />
       <Switch>
        <Home/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/toprated" component={PelisTop}/>
      <Route path="/pop" component={PeliculasPopulares}/>
      <Search/>
      </Switch>
      </div>

     </React.Fragment>
  );
}
export default App;
