import React from 'react'
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home"
import { Route, Switch} from 'react-router-dom'




function App() {

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
      </Switch>


     </React.Fragment>
  );
}
export default App;
