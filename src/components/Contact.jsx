import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'samuelrhawthorne32';
    const templateID = 'template_hwqgihz';
    const publicKey = '9x72wYEz9HVRDBnpe';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSentSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSentSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          placeholder="Your Name" 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          placeholder="your.email@example.com" 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          placeholder="Write your message here..." 
          rows="5"
        ></textarea>

        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>

      {sentSuccess === true && (
        <p className="success-msg">✅ Message sent successfully!</p>
      )}
      {sentSuccess === false && (
        <p className="error-msg">❌ Something went wrong. Please try again.</p>
      )}
    </section>
  );
}
