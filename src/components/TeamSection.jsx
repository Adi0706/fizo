import React from 'react';
// import mddoctor from '../assets/images/mddoctor.png'
// Social Links Component
const SocialLinks = () => {
  return (
    <ul className="social-network">
      <li>
        <a href="./"><i className="fab fa-facebook-f"></i></a>
      </li>
      <li>
        <a href="./"><i className="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href="./"><i className="fab fa-google-plus-g"></i></a>
      </li>
      <li>
        <a href="./"><i className="fab fa-vimeo-v"></i></a>
      </li>
    </ul>
  );
};

// Team Member Component
const TeamMember = ({ imgSrc, name, qualifications, languages }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card rounded-3">
        <div className="team-img">
          <img
            decoding="async"
            src={imgSrc}
            className="img-fluid"
            style={{ width: '100px', height: '100px' }}
            alt={name}
          />
        </div>
        <div className="team-info pt-4 text-center">
          <h5>{name}</h5>
          <p>{qualifications}</p>
          <p><h6>{languages}</h6></p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

// Team Section Component
const TeamSection = () => {
  return (
    <section id="doctor" className="team_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3 className="text-black">Our Doctors</h3>
          </div>
        </div>
        <div className="row">
          {/* Team Member 1 */}
          <TeamMember
            imgSrc="../assets/images/fdoctor.png"
            name="Dr Dennis D Michael"
            qualifications="BPTH"
            languages="English"
          />
          {/* Team Member 2 */}
          <TeamMember
            imgSrc="./images/fdoctor.png"
            name="Dr Humaira Khan"
            qualifications="B.O.Th, M.O.Th"
            languages="English, বাংলা"
          />
          {/* Team Member 3 */}
          <TeamMember
            imgSrc="./images/mdoctor.png"
            name="Dr E N Vipinnath"
            qualifications="BPT, MPT, PG DipMT, CMP"
            languages="English, français, हिंदी, മലയാളം, தமிழ்"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
