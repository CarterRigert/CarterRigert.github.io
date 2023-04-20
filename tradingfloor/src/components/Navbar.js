import React from 'react';
import './Css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Trading Floor
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tutorialpage">
                                Tutorial
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">
                                Team Members
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
