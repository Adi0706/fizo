import React from 'react';
import Service from './Service';
import treatmentPlanningIcon from '../assets/images/Treatment Planning.png';
 import assessmentIcon from '../assets/images/Assessment and Diagnosis.png';
import manualTherapyIcon from '../assets/images/Manual Therapy.png';
 import selfManagementIcon from '../assets/images/Self-Management.png';
 import deviceMaintenanceIcon from '../assets/images/Device Maintenance.png';
 import technicalSupportIcon from '../assets/images/Technical support.png';
const ServicesSection = () => {
  const servicesData = [
    {
      icon:treatmentPlanningIcon ,
      title: 'Assessment and Diagnosis',
      description: 'Rely on our comprehensive Assessment and Diagnosis services for thorough and reliable health insights.',
    },
    {
        icon:assessmentIcon ,
        title: 'Treatment Planning',
        description: 'Depend on our meticulous Treatment Planning services for personalized and effective healthcare strategies.',
      },
      {
        icon:manualTherapyIcon ,
        title: 'Manual Therapy',
        description: 'Discover the healing potential of our Manual Therapy techniques for holistic well-being.',
      },
      {
        icon:selfManagementIcon ,
        title: 'Self-Management',
        description: ' Empower Yourself Through Effective Self-Management for Health and Wellness.',
      },
      {
        icon:deviceMaintenanceIcon ,
        title: 'Device Maintenance',
        description: 'Ensure Optimal Performance and Longevity with Our Services.',
      },
      {
        icon:technicalSupportIcon ,
        title: 'Technical support',
        description: 'Get Expert Technical Support for Swift Issue Resolution and Peace of Mind.',
      },
  ];

  return (
    <section id="services" className="services_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Our Services</h3>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
