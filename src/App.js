import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import SignupPage from './components/Signup/SignupPage';
import { validateLoginForm } from './components/Signup/validate';
//import Recipe from './components/Recipe';
import Login from './components/login/Login'
import Thankyou from './components/Thankyou';

class App extends Component {
  render() {
     return (
       <>
      
    
       <BrowserRouter>
            <div className="App">
            
             <Navbar/> 
              <Switch>
               
                    <Route exact path="/" component={Home}/>
                    
                   
                    <Route path="/cart" component={Cart}/>
                   
                    </Switch>
             </div>
       </BrowserRouter>
    
      </>
    );
  }
}

export default App;