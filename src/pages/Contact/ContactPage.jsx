import React, { useState } from 'react';
import './ContactPage.css';
// import { useNavigate } from 'react-router-dom';
// import '../About/About.css';
// import contactImg from '../../images/contact-img.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server or perform actions
    console.log('Form submitted:', formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
        {/* <img src = {contactImg} alt = "" /> */}
        <p>If you have any questions or concerns, feel free to reach out to us!</p>
      </header>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

        

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
        
      </section>
      <a href='https://api.whatsapp.com/send?phone=9080690743'><span>Open whatsapp</span></a>
      <footer>
        <p>&copy; {new Date().getFullYear()} Digital Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
