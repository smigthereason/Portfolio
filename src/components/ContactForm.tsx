import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import emailjs-com
import '/src/styles/ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set your Email.js service ID, template ID, and public key
    const serviceID = 'service_dikvg4b';
    const templateID = 'template_c63xfr8';
    const publicKey = 'eMhqXRhTIu_OgnOnH';  // Replace this with your actual public key

    // Send the email
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Clear the form after submission
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Name*</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email Address*</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone Number*</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="form-group full-width">
        <label>A Few Words*</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

