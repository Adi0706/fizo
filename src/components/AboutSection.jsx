import React from 'react';
import familyImage from '../assets/images/family.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="about_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-mb-0 mb-5">
            <div className="position-relative">
              <img decoding="async" src={familyImage} className="img-fluid" alt="Family" />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
          <h2>Welcome to a Family</h2>
            <p>
              Experience the warmth of a caring family with our patient support app, where empathy and support thrive. Join us today for a compassionate journey toward better health.
            </p>
            <div className="mt-5 card">
              <div className="about-clinic">
                <h4>500+</h4>
                <p>Happy Patients</p>
              </div>
              <div className="about-clinic">
                <h4>88+</h4>
                <p>Qualified Doctors</p>
              </div>
              <div className="about-clinic">
                <h4>25+</h4>
                <p>Years Experience</p>
              </div>
              <div className="about-clinic">
                <h4>55+</h4>
                <p>Awards</p>
              </div>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
