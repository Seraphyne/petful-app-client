import React from 'react';
import './App.css';
import Landing from '../Landing/Landing.js';
import Adopt from '../Adopt/Adopt';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
          <Link to='/'><h1>Petful</h1></Link>
          <Route exact path='/' component={Landing} />
          <Route path='/adopt' component={Adopt} />
        </header>
      </div>
    );
  }
}

export default App;
