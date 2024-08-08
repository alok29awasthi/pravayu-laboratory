import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesDropdown.css';
import { servicesData } from '../../assets/constants/ServicesDropdownData';

const ServicesDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // Close dropdown on link click
  };

  return (
    <div className={`services-dropdown ${isDropdownOpen ? 'open' : 'closed'}`}>
      <div className='services-dropdown-join' />
      <div className="services-dropdown-content">
        <ul className='list-parent'>
          {servicesData.map((service, index) => (
            <div key={index} className="services-category">
              <li className='list-parent-content'>
                <h3>{service.category}</h3>
                <ul className='list-child'>
                  {service.items.map((item, subIndex) => (
                    <li className='list-child-content' key={subIndex}>
                      <Link to={`/service?category=${service.category}`} onClick={handleLinkClick}>
                        + {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesDropdown;
