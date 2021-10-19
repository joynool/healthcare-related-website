import React from 'react';
import coverPhoto from './../../images/aboutUs.png';

const AboutUs = () =>
{
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <div className="">
                <img src={coverPhoto} alt="" className="img-fluid img-thumbnail" />
            </div>
            <div className="text-center border border-2 rounded my-3 p-3">
                <h2 className="text-success text-decoration-underline mb-5">COACHING & TRAINING SERVICES</h2>
                <div>
                    <h3 className="fw-normal">Advance Training</h3>
                    <p className="fw-light lh-lg">Get guidance and consideration from our Australian Certified Fitness expert. Our instructor is always there to give you what you need to achieve your goal and our trainers will constantly assist and motivate and push you to achieve your health and a good lifestyle! We are not just a Fitness Club, we are a lifestyle changer!</p>
                </div>
                <div>
                    <h3 className="fw-normal">Fitness Consultation</h3>
                    <p className="fw-light lh-lg">You will have a fitness consultation with our Australian Fitness Instructor. A Body Composition Analysis Report and nutrition. Through a short survey, conversation, and a movement observation for 3 days. Our team will prescribe the perfect program after 3 days of movement assessment to get you started and on track to meet your fitness goals. We do an analysis every month to check how much progress has been made. Those who already have experience in a workout can also do Body composition to check their progress and can do their own programs.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;