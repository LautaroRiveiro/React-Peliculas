import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//Pages
import HomePage from './pages/HomePage';
import DetallesPage from './pages/DetallesPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ HomePage } />
          <Route path="/detalles" component={ DetallesPage } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
