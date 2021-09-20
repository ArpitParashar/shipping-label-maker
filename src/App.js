import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import ShippingLabelMakerComponent from './features/shipping-label-maker/shipping-label-maker-component';
import LoginComponent from './pages/login'
import ProtectedRoute from './hoc/authorized';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
          <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/wizard" component={ShippingLabelMakerComponent} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/login" component={LoginComponent} />
            <Route path="*" component={() => "404 Not Found"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
