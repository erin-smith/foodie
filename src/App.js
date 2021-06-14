import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Local from './pages/Local';
import Header from './components/Header'
import Home from './pages/Home';
import Transformative from './pages/Transformative';
import Suggest from './pages/Suggest';
import Explore from './pages/Explore';
import { StoreProvider } from "./utils/globalState";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <StoreProvider>
          <Switch>
            <Route path="/foodie" exact component={Home} />
            <Route path="/explore" exact component={Explore} />
            <Route path="/suggest" exact component={Suggest} />
            <Route path="/transformative" exact component={Transformative} />
            <Route path="/local" exact component={Local} />
            {/* <Route path="/details" exact component={Details} /> */}
          </Switch>
        </StoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
