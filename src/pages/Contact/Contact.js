import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
      <h3 className="contact-title">
        <span>Contact Us</span>
      </h3>
      <ContactForm />
    </div>
  );
}

export default Contact;
