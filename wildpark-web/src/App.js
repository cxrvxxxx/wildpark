import React from 'react';

import './styles/App.css';

import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
  return (
    <div className='main container-fluid vh-100 overflow-auto px-0'>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
