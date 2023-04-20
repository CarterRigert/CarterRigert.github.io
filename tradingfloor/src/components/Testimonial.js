import React from 'react';
import './Css/Testimonial.css';
import carterImage from '../images/CarterSquare.jpg';
import wenlinImage from '../images/wenlin.jpg';
import ashImage from '../images/ash.jpg';
import XialiImage from '../images/Xiali.jpg';

const Testimonial = () => {
    return (

       
            <section id="testimonial" class="bg-light py-5 py-xl-6">
                <div class="container mb-5 mb-md-6">
                    <div class="row justify-content-md-center">
                        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 class="mb-4 display-5">Team Members</h2>
                            <p class="text-secondary mb-4 mb-md-5"></p>
                            <hr class="w-50 mx-auto mb-0 text-secondary"/>
                        </div>
                    </div>
                </div>
                <div class="container overflow-hidden">
                    <div class="row justify-content-lg-around gy-5 gy-md-6">
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={carterImage} alt=""/>
                            <p class="mb-2">Back End Developer</p>
                           
                            <p class="m-0 fw-bold">Carter Rigert</p>
                            <a href="#!">about</a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={wenlinImage} alt=""/>
                            <p class="mb-2">Front End Developer</p>
                            
                            <p class="m-0 fw-bold">Wenlin Li</p>
                            <a href="#AboutWenlin">about</a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={XialiImage} alt=""/>
                            <p class="mb-2">Web Designer</p>
                            
                            <p class="m-0 fw-bold">Robert Li</p>
                            <a href="#AboutRobert">about</a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={ashImage} alt=""/>
                            <p class="mb-2">Data Engineer</p>
                            
                            <p class="m-0 fw-bold">Ashley Lan</p>
                            <a href="#!">about</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial;