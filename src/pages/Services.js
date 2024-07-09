import React, { useState } from 'react';
import './Services.css'; // Import your custom CSS file
import Modal from '../components/Modal/Modal';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: 'Blood Testing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique tortor et metus fermentum faucibus.' },
    { id: 2, name: 'Urine Analysis', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, name: 'Pathology', description: 'Integer at massa vel est suscipit scelerisque. Nullam sit amet vestibulum mauris.' },
    { id: 4, name: 'Radiology', description: 'Duis ut leo vitae velit tincidunt eleifend vel in eros. Nullam in sem nec odio bibendum consectetur.' },
    { id: 5, name: 'CT Scan', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras pharetra libero ac nisl tempus, vitae convallis erat aliquam.' },
    { id: 6, name: 'MRI', description: 'Etiam maximus sapien vitae sem dictum, vel viverra eros fringilla. Nulla eget nunc nec sem lobortis egestas.' },
    { id: 7, name: 'X-ray', description: 'Fusce elementum diam eu eros interdum, ut tempus libero varius. Nam eget leo vel odio ultricies dapibus a at nunc.' },
    { id: 8, name: 'Ultrasound', description: 'Maecenas eget sapien auctor, dapibus enim vel, convallis libero. Aliquam sagittis diam id dui consequat, sit amet varius lacus rhoncus.' },
    { id: 9, name: 'Echocardiography', description: 'Donec maximus tortor in purus consequat, et mollis neque sagittis. Nullam at mauris non eros volutpat lacinia.' },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-box" onClick={() => openModal(service)}>
            <div className="service-name">+ {service.name}</div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h3>{selectedService.name}</h3>
          <p>{selectedService.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Services;
