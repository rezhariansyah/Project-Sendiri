import React, { Component } from 'react';
import './App.css';
// default impord end
import Header from './component/navbar'
import Footer from './component/footer'
import Login from './component/loginPage'
import RegisterPage from './component/registerPage'
import Home from './component/home'
import { Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div>
            <Route path='/loginPage' component={Login}/>
            <Route path='/registerPage' component={RegisterPage}/>
            <Route path='/' component={Home} exact/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
