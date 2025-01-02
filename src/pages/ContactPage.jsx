import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", phone: "", inquiry: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <h1>Contact Us</h1>
        <p>Get in Touch with Us and Step into the World of Dance!</p>
      </header>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Nrithya Parichay, Delhi, 110000</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890 | +1 (987) 654-3210</p>
          <p><strong>Email:</strong> <a href="mailto:info@nrithyaparichay.com">info@nrithyaparichay.com</a></p>
          <p><strong>Operating hours: </strong> Mon - Fri : 5:00 PM - 8:00 PM <br></br>
               Sat & Sun : 11:00 AM to 7:00 PM</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509175!2d144.95373631531893!3d-37.81720997975125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1c860f2e740!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601234567890!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (optional)"
          />
          <select
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Type of Inquiry</option>
            <option value="schedule">Class Schedule</option>
            <option value="private-lessons">Private Lessons</option>
            <option value="events">Events</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

     <footer> </footer>
    </div>
  );
};

export default ContactPage;
