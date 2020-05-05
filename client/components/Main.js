import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Board from './Board';
import AddSquare from './AddSquare';

const Main = props => {
  return (
    <div id="main-container">
      <Navbar />
      <div className="background-img" />

      <Route exact path="/" component={Board} />
      <Route path="/board" component={Board} />
      <Route exact path="/add" component={AddSquare} />
    </div>
  )
}

export default Main;