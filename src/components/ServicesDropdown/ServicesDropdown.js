import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDropdown.css';
import {servicesData} from '../../assets/constants/ServicesDropdownData'

const ServicesDropdown = () => {
  return (
    <div className="services-dropdown">
    <div className='services-dropdown-join'/>
    <div className="services-dropdown-content">
    <ul className='list-parent'>
      {servicesData.map((service, index) => (
        <div key={index} className="services-category">
          <li className='list-parent-content'>
            <h3>{service.category}</h3>
            <ul className='list-child'>
            {service.items.map((item, subIndex) => (
                <li className='list-child-content'>
                    <Link key={subIndex} to={item.link}>
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