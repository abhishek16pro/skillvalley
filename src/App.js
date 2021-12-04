import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Order from './Component/Order/Order';
import Contactus from './Component/ContactUs/Contactus';
import Error from './Component/Error/Error';

function App() {
  return (
    <>
    <Navbar />
    <Switch>

    <Route exact path = "/">
      <Home/>  
    </Route>
    <Route path = "/order">
      <Order/>
    </Route>
    <Route path = "/about">
      <About/> 
    </Route>
    <Route path = "/contactus">
      <Contactus/> 
    </Route>
    <Route>
        <Error />
    </Route>
    </Switch>
    </>
  );
}

export default App;
