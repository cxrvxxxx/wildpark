import React from 'react';

import '../styles/Home.css';

import LoginForm from '../components/auth/login/LoginForm';

const Home = () => {
    return (
        <div className="home container">
            <div className="row w-100">
                <div className="login-panel col-md-4 p-4 shadow">
                    <LoginForm />
                </div>
                <div className='home-content col-md-8 d-flex px-5 align-items-center'>
                    <h1>Parking.<br /><b>Simplified.</b></h1>
                </div>
            </div>
        </div>
    );
}

export default Home;