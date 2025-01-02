import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    course: "",
    rating: "",
    feedback: "",
  });

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    // Reset the form after submission
    setFeedbackData({
      name: "",
      course: "",
      rating: "",
      feedback: "",
    });
    setIsFeedbackVisible(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <h1>About Us</h1>
        <p>Discover Our Passion for Dance and How We Inspire Every Step!</p>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>Nrithya Parichay</strong>, where passion meets
            rhythm! Our academy was founded with the vision of creating a
            space where dance lovers of all ages and skill levels can express
            themselves, learn, and grow.
          </p>
          <p>
            With expert instructors, state-of-the-art facilities, and a
            supportive community, we strive to inspire and nurture talent in
            every individual who walks through our doors.
          </p>
          <h2>Our Mission</h2>
        <p>
          At <strong>Dance Academy</strong>, our mission is to make dance
          accessible to everyone. We aim to provide high-quality training,
          foster creativity, and encourage self-expression through the art of
          dance.
        </p>
        <p>
          Whether you're here to explore a new hobby, prepare for professional
          performances, or simply have fun, we're here to support your journey.
        </p>
        </div>
        <div className="about-image">
          <img
            src="/images/group.jpeg"
            alt="Dance Academy"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="/images/remo.jpeg"
              alt="Instructor 1"
            />
            <h3>Remo D'Souza </h3>
            <p>Founder & Lead Choreographer</p>
          </div>
          <div className="team-member">
            <img
              src="/images/dharmesh.jpeg"
              alt="Instructor 2"
            />
            <h3>Dharmesh</h3>
            <p>Hip-Hop & Urban Styles</p>
          </div>
          <div className="team-member">
            <img
              src="/images/punithj.jpeg"
              alt="Instructor 3"
            />
            <h3>Punith J Pathak</h3>
            <p>Bollywood & Contemporary</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>"Are you already part of our community? If yes, please share your feedback with us!"</h2>
        <p>Your feedback helps us grow! Share your thoughts and help us improve.</p>
        <button onClick={() => setIsFeedbackVisible(!isFeedbackVisible)}>
          Feedback
        </button>
      </section>


      {/* Feedback Form */}
      {isFeedbackVisible && (
        <section className="feedback-form">
          <h3>Feedback Form</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={feedbackData.name}
                onChange={handleFeedbackChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Course:</label>
              <input
                type="text"
                name="course"
                value={feedbackData.course}
                onChange={handleFeedbackChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Rating (1-5):</label>
              <input
                type="float"
                name="rating"
                value={feedbackData.rating}
                onChange={handleFeedbackChange}
                min="1"
                max="5"
                required
              />
            </div>
            <div className="form-group">
              <label>Feedback:</label>
              <textarea
                name="feedback"
                value={feedbackData.feedback}
                onChange={handleFeedbackChange}
                required
              />
            </div>
            <button type="submit" className="submit-feedback-button">
              Submit Feedback
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default About;
