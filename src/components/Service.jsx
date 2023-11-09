import React from 'react'


const Service = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <div className="icon-box">
          <img decoding="async" src={icon} style={{ width: '70px', height: '70px' }} alt={title} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
          <a href="./" className="main-btn mt-4">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
