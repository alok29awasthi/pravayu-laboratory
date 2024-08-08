import React, { useState } from 'react';
import { servicesData } from '../../assets/constants/ServicesDropdownData'; // Adjust the path according to your project structure
import './Services.css'; // Import CSS file for styles
import ServiceCard from '../../elements/ServiceCard/ServiceCard';
import ContactForm from '../../components/ContactForm/ContactForm';

const Services = () => {
  const [mainService, setMainService] = useState(null);
  const [isHiding, setIsHiding] = useState(false);

  const handleCardClick = (serviceTitle) => {
    setMainService(serviceTitle);
  };

  const handleLessClick = () => {
    setIsHiding(true);
    setTimeout(() => {
      setMainService(null);
      setIsHiding(false);
    }, 500);
  };

  const selectedService = servicesData.find(service => service.category === mainService);

  return (
    <div className="services-container">
    <h3 className="services-title">
      <span>Services</span>
    </h3>
    {mainService && selectedService && (
      <div className={`service-details ${isHiding ? 'slide-up' : ''}`}>
        <div className='service-details-content'>
          <div className='service-details-info'>
            <h3 className='services-title service-category-title'><span>{selectedService.category}</span></h3>
            <ul>
              {selectedService.items.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='enquiry-form'> <ContactForm services='true' /> </div>
        </div>
        <button className='more-less-button' onClick={handleLessClick}>Show Less</button>
      </div>
    )}

      <div className='services-content'>
        {servicesData.map((service) => (
          <ServiceCard title={service.category} 
          title_icon={service.icon} 
          body={service.items} 
          onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
};

export default Services;