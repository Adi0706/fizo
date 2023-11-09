import React from 'react';
import ex1 from '../assets/images/ex1.gif'

const Section = () => {
  return (
    <section id="home" className="home">
      <div className="banner_wrapper wrapper particles-js">
        <div className="container back">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
            <h3>Improved Life with </h3>
              <h1>Effective Physiotherapy Care</h1>
              <p>Experience a Friendly and Supportive Physiotherapy Environment. Our Team Works Diligently to Bring a Smile to Your Recovery. Committed to Your Well-being.</p>
              <a href="./" className="main-btn mt-4 fill-btn">
                Register
              </a>
              <a href="./" className="main-btn mt-4 ms-3">
                Learn More
              </a>
            </div>
            <div className="col-md-6 order-md-2 order-1 mb-md-0 mb-5">
              <div className="top-right-sec main-imgs">
                <div className="animate-img">
                  <img decoding="async" className="aimg1" src={ex1} alt="example1" />
                </div>
                {/* <img
                  decoding="async"
                  className="img-fluid ms-xl-5 mt-2 mb-10"
                  src={online}
                  width="250"
                  height="200"
                  alt="online"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
