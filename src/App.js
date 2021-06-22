import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Local from './pages/Local';
import Home from './pages/Home';
import Transformative from './pages/Transformative';
import Suggest from './pages/Suggest';
import Explore from './pages/Explore';
import Error from './pages/Error';
import { StoreProvider } from "./utils/globalState";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <StoreProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/explore" exact component={Explore}/>
            <Route path="/suggest" exact component={Suggest}/>
            <Route path="/transformative" exact component={Transformative}/>
            <Route path="/local" exact component={Local} />
            {/* <Route path="/about" exact component={About}/>
            <Route path="/privacy" exact component={Privacy}/>
            <Route path="/contact" exact component={Contact}/> */}
            <Route path="/error" exact component={Error}/>
          </Switch>
        </StoreProvider>
      </BrowserRouter>
      </div>
  )
};

export default App;
