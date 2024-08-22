import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';  // Import EmailJS
import './ContactForm.css';
import SendButton from '../../elements/SendButton/SendButton';
import { servicesData } from '../../assets/constants/ServicesDropdownData';

function ContactForm({ services = false, message = 'No Message' }) {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const sortedItems = servicesData.flatMap(category => category.items).sort((a, b) => a.name.localeCompare(b.name));
  const serviceOptions = sortedItems.map(item => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Define the template parameters for EmailJS
    const templateParams = {
      service: formData.service,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs.send('service_h9wljqh', 'template_f3mg4w9', templateParams, 'Y1S6kcZ82wyIJsBb6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');

        setFormData({
          service: '',
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <Form onSubmit={handleSubmit} className="contact-form">
        {services && (
          <Row>
            <Col md={12}>
              <Form.Group controlId="services">
                <Form.Label>Service Required *</Form.Label>
                <Form.Select
                  name="service"
                  placeholder='Select Service'
                  value={formData.service}
                  onChange={handleChange}
                  className="input-field"
                  defaultValue="Not Selected"
                  required
                >
                  <option value="">Other</option>
                  {serviceOptions}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="input-field"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="input-field"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input-field"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="input-field"
                pattern="[0-9]*"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="formMessage">
              <Form.Label>{message}</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="textarea-field"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className='send'>
          <SendButton />
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;