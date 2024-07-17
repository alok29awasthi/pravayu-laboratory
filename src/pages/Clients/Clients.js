import React from 'react';
import ClientCard from '../../components/ClientCard/ClientCard';
import { clients } from '../../assets/constants/ClientConstants';
import './Clients.css';

const Clients = () => {
  return (
    <div className="clients-container">
      <h3 className="contact-title">
        <span>Clients</span>
      </h3>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <ClientCard key={index} image={client.image} name={client.name} />
        ))}
      </div>
    </div>
  );
}

export default Clients;