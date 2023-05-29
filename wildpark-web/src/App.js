import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showHome } from './actions/currentPage/actions';
import { HOME_PAGE, SIGNUP_PAGE } from './actions/currentPage/actionTypes';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';

import './styles/App.css';

const App = () => {
  const page = useSelector(state => state.page);

  const showPage = (page) => {
    console.log(page.currentPage);
    switch (page.currentPage) {
      case HOME_PAGE: return <Home />
      case SIGNUP_PAGE: return <Signup />
    };
  };

  return (
    <div className='main container-fluid vh-100 overflow-auto px-0'>
      <Nav />
      {showPage(page)}
    </div>
  );
}

export default App;
