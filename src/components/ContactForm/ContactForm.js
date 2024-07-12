import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './ContactForm.css'; // Import custom CSS for styling
import SendButton from '../../elements/SendButton/SendButton';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate input for phone number (only allow numeric characters)
    if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
      return; // Prevent updating state if input contains non-numeric characters
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Validation before submission
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Construct mailto link for email submission
    const mailtoLink = `mailto:your_email@example.com?subject=Contact%20Form%20Submission&body=Name:%20${formData.firstName}%20${formData.lastName}%0AEmail:%20${formData.email}%0APhone:%20${formData.phoneNumber}%0AMessage:%20${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-form-container">
      <Form onSubmit={handleSubmit} className="contact-form">
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
                pattern="[0-9]*" // Pattern attribute to enforce numeric input
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="formMessage">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="textarea-field"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className='send'>
          <SendButton/>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
