import React from 'react';
import { useSelector } from 'react-redux';

import * as actionTypes from './actions/currentPage/actionTypes';

import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

import './styles/App.css';

const App = () => {
  const page = useSelector(state => state.page);

  const showPage = (page) => {
    switch (page.currentPage) {
      case actionTypes.HOME_PAGE: return <Home />
      case actionTypes.SIGNUP_PAGE: return <Signup />
      case actionTypes.ABOUT_PAGE: return <About />
      case actionTypes.SUPPORT_PAGE: return <Support />
      case actionTypes.CONTACT_PAGE: return <Contact />
    };
  };

  return (
    <div className="main container-fluid vh-100 overflow-auto px-0">
      <Nav />
      <div className="content container-fluid px-0 pt-5 h-100">
        {showPage(page)}
      </div>
    </div>
  );
}

export default App;
