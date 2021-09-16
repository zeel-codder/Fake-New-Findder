import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login.js';
import { SignUp } from './SignUp';
import '../CSS/navbar.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
export const Navbar = () => {
    return (
        <div>
            <Router>
        <div className='nav'>
        <Fade left big>
          <h2 className='title'>Movies Recommendation System</h2>
        </Fade>
        <Slide left>
          <ul>
            <li className='links'><Link className='inside' to={'/'} > Home </Link></li>
            <li className='links'><Link className='inside' to={'/login'} >Login</Link></li>
            <li className='links'><Link className='inside' to={'/signup'} >SignUp</Link></li>
          </ul>
            </Slide>
          </div>
          <div>  
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
        </div>
    )
}
