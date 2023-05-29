import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
