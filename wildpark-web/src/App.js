import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import store from './store';
import { showHome } from './actions/currentPage/actions';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';

import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHome());
  }, []);

  const currentPage = useSelector(state => state.currentPage);

  return (
    <Provider store={store}>
      <div className='main container-fluid vh-100 overflow-auto px-0'>
        <Nav />
        {currentPage === 'HOME_PAGE' ? <Home /> : <About />}
      </div>
    </Provider>
  );
}

export default App;
