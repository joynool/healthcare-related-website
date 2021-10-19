import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from './../../images/carousel/carousel_one.jpg';
import two from './../../images/carousel/carousel_two.jpg';
import three from './../../images/carousel/carousel_three.jpg';

/*-----------------------------------------------------
            Home page image slider panel 
-------------------------------------------------------*/
const Banner = () =>
{
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={one}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>THE RUNNER'S LIFE</h3>
                        <p>Gym and meditation can greatly increase your stamina.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={two}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>SHAPE YOUR PERFECT BODY</h3>
                        <p>Muscle building isn’t just for those who are into fitness as a hobby.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-thumbnail"
                        src={three}
                        alt="Third slide"
                    />

                    <Carousel.Caption className=" position-absolute">
                        <h3>FITNESS WORKOUT PROGRAM</h3>
                        <p>It includes your body’s water, bone, organs, and muscle content.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;