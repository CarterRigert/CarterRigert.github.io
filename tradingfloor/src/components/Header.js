import React from 'react';
import './Css/Header.css';
import TeamImage from '../images/TeamTradingFloor.jpg';


const Header = () => {
    return (
        <header
            className="header text-white text-center py-5"
            style={{ backgroundImage: `url(${TeamImage})` }}
        >
            <div className="container">
                <div className="header-content">
                    <h1>Trading Floor</h1>
                    <h2>Market Mastery Made Easy</h2>
                    <p>
                        
                    </p>

                </div>
            </div>
        </header>
    );
};

export default Header;
