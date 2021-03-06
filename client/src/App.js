import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Local from './pages/Local';
import Home from './pages/Home';
import Transformative from './pages/Transformative';
import Suggest from './pages/Suggest';
import Explore from './pages/Explore';



function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        {console.log (`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL + '/'}`)}
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/suggest" component={Suggest}/>
            <Route exact path={"/transformative"} component={Transformative}/>
            <Route exact path={"/local"}  component={Local} />
            </div>
      </BrowserRouter>
 
  )
};

export default App;
