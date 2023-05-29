import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap'

import { showSignupPage } from "../actions/currentPage/actions";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const dispatch = useDispatch();

    const handleSignupClick = (e) => {
        e.preventDefault();

        dispatch(showSignupPage());
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4 className="mb-4"><b>Login</b></h4>
            <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-check-inline mb-4">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                    name="remember" />
                <label className="form-check-label mx-2" htmlFor="remember">Remember me</label>
            </div>
            <div className="form-group mb-4">
                <Button type="submit" variant="primary">Login</Button>
            </div>
            <a className="d-inline" href="" onClick={handleSignupClick}>Don't have an account? Create one!</a>
        </form>
    );
}

export default LoginForm;