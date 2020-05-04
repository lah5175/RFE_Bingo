import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Board from './board';
import AddSquare from './AddSquare';

const Main = props => {
  return (
    <div id="main-container">
      <Navbar />

      <Route exact path="/board" component={Board} />
      <Route exact path="/board/add" component={AddSquare} />
    </div>
  )
}

export default Main;