import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Local from './pages/Local';
import Home from './pages/Home';
import Transformative from './pages/Transformative';
import Suggest from './pages/Suggest';
import Explore from './pages/Explore';
// import Error from './pages/Error';



function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        {console.log (`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL + '/'}`)}
        <div>
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/suggest" component={Suggest}/>
            <Route exact path={"/transformative"} component={Transformative}/>
            <Route exact path={"/local"}  component={Local} />
            <Footer/>
            </div>
      </BrowserRouter>
 
  )
};

export default App;
