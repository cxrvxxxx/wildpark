import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions/currentPage/actions';

import '../styles/Nav.css';

const Nav = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/logo/', {
                    responseType: 'arraybuffer',
                });

                const blob = new Blob([response.data], { type: 'image/png' });
                const src = URL.createObjectURL(blob);
                setLogoUrl(src);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchLogo();
    }, []);

    const dispatch = useDispatch();

    const handleHomeClick = (e) => {
        e.preventDefault();

        dispatch(actions.showHomePage());
    };

    const handleAboutClick = (e) => {
        e.preventDefault();

        dispatch(actions.showAboutPage());
    };

    const handleSupportClick = (e) => {
        e.preventDefault();

        dispatch(actions.showSupportPage());
    };

    const handleContactClick = (e) => {
        e.preventDefault();

        dispatch(actions.showContactPage());
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top shadow" color-on-scroll="400">
            <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href="" onClick={handleHomeClick} rel="tooltip" data-placement="bottom">
                        <img className="logo" src={logoUrl} alt="logo" />
                        <p className="mx-3 d-inline"><b>WildPark</b></p>
                    </a>
                    <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar top-bar"></span>
                        <span className="navbar-toggler-bar middle-bar"></span>
                        <span className="navbar-toggler-bar bottom-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="images/blurred-image-1.jpg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={handleHomeClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={handleAboutClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={handleSupportClick}>Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={handleContactClick}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;