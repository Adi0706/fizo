import React from 'react';
import knee from '../assets/images/knee.png'
import elbow from '../assets/images/elbow.png'
import shoulder from '../assets/images/shoulder.png'
// Exercise Component
const Exercise = ({ imgSrc, title }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <div className="icon-box">
          <img
            decoding="async"
            src={imgSrc}
            style={{ width: '100px', height: '100px' }}
            alt={title}
          />
        </div>
        <div>
          <h4>{title}</h4>
          <a href="./" className="main-btn mt-4">
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

// Data Section Component
const ExerciseSection = () => {
  return (
    <section id="data" className="services_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Exercises</h3>
          </div>
        </div>
        <div className="row">
          {/* Exercise 1 */}
          <Exercise imgSrc={knee} title="Pain-Free Knees" />
          {/* Exercise 2 */}
          <Exercise imgSrc={elbow} title="Elbow-Flex" />
          {/* Exercise 3 */}
          <Exercise imgSrc={shoulder} title="Shoulder Care" />
        </div>
      </div>
    </section>
  );
};

export default ExerciseSection;
