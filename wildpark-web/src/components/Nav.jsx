import React, { useEffect, useState } from "react";
import axios from 'axios';

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

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top" color-on-scroll="400">
            <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href="#" rel="tooltip" data-placement="bottom">
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
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;