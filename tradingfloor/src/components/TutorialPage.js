import React  from 'react';
import './Css/About.css';

import systemImage from '../images/tutorial.png';
import RImage from '../images/recommendation.png';
import { Container, Row, Col } from 'react-bootstrap';


const Tutorialpage = () => {


    return (
        <section className="tutorialpage" id="tutorialpage">
            <Container>
               


               
                    <img
                        src={systemImage}
                        alt="Tutorial"
                        className="img-fluid"
                />
                <h1>Recommendation System In Use</h1>
                <img
                    src={RImage}
                    alt="Recommendation"
                    className="img-fluid"
                />

               
            </Container>
        </section>
    );
};

export default Tutorialpage;
