import React from 'react';

import SignupForm from '../components/auth/signup/SignupForm';

import '../styles/Signup.css';

const Signup = () => {
    return (
        <div className="signup container w-50 justify-content-center">
            <SignupForm />
        </div >
    );
}

export default Signup;