import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFecha} from './redux/actions/updateFechaAction';

//Pages
import HomePage from './pages/HomePage';
import DetallesPage from './pages/DetallesPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

    componentDidMount(){
        console.info("App.props", this.props);
        setInterval(()=>{this.props.updateFecha()},1000)
    }

    render() {
        return (
          <BrowserRouter>
            <div>
              <Header fecha={this.props.fecha.data}/>
              <Route exact path="/" component={ HomePage } />
              <Route path="/detalles/:id" component={ DetallesPage } />
              <Footer/>
            </div>
          </BrowserRouter>
        );
  }
}

function mapStateToProps(store){
  return{
      fecha: store.fecha
  }
}

export default connect(mapStateToProps,{updateFecha})(App);
