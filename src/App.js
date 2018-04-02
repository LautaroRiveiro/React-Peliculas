import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//Pages
import HomePage from './pages/HomePage';
import DetallesPage from './pages/DetallesPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={ HomePage } />
          <Route path="/detalles" component={ DetallesPage } />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
