import React  from 'react';
import './Css/About.css';

import systemImage from '../images/system.png';
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {


    return (
        <section className="about" id="about">
            <Container>
                <h3>We are making a stock trading Application that allows users to trade, and view stocks through the web.</h3>

                <p>
                    The application will have the main features of a stock trading application and make everything simpler for shareholders to manage and view stocks. In addition our application will provide analysis on stocks to help traders make informed decisions. Our users are normal shareholders and people who are interested in trading stocks. Our application will help these users make informed decisions and have a better experience trading by making the application simple and easy to use while also providing powerful trading tools. We plan to make an order template system that allows users to quickly create trades and also allow the saving of these templates for future use. We also plan on having a rating system where users can rate a stock as a buy or a sell and then view the overall sentiment of the stock based on other users of the platform. These features will help our target users to make more informed trades and allow the user to execute trades faster.

                </p>
               
                    <img
                        src={systemImage}
                        alt="system"
                        className="img-fluid"
                    />

               
            </Container>
        </section>
    );
};

export default About;
