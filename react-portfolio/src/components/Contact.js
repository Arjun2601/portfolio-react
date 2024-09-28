/*
filename: Contact.js
student name: Arjun Chovatiya
student Id: 301352977
date: 27/09/2024
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Contact = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
      <p className='ContactBtn'>
        <a href="mailto:achovat2@my.centennialcollege.ca">Contact Me</a>
      </p>
    </div>
  );
};

export default Contact;
