import React, { useState } from "react";
import "../pages/Contact.css";  // Make sure you have a CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/meoarzzk", {  // Replace with your Formspree endpoint URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("✅ Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send email. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us📝</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Send</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
