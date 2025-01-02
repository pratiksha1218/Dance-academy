import React, { useState } from "react";
import "./DanceStyles.css";


function DanceStyles() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate a payment process
    alert("Redirecting to payment...");
    setTimeout(() => {
      setPaymentSuccess(true);
      alert("Payment Successful!");
    }, 2000);
  };

  const styles = [
    {
        name: "Yakshagana",
        image: "/images/yakshagana.jpg",
        description: "A traditional Karnataka dance-drama blending storytelling, music, and vibrant costumes.",
    },
    {
      name: "Bharatanatyam",
      image: "/images/bharatanatyam.jpg",
      description: "A classical Indian dance known for its grace and intricate gestures.",
    },
    {
      name: "Kathak",
      image: "/images/kathak.jpg",
      description: "A classical dance form characterized by rhythmic footwork and spins.",
    },
    {
        name: "Odissi",
        image: "/images/odissi.jpg",
        description: "A graceful Odisha dance known for fluid movements and sculpturesque poses.",
    },
    {
        name: "Mohiniyattam",
        image: "/images/mohiniyattam.jpg",
        description: "A graceful Kerala dance with swaying movements and subtle expressions.",
    },
    {
      name: "Hip-Hop",
      image: "/images/hiphop.jpg",
      description: "A vibrant dance style that combines freestyle and energetic moves.",
    },
    {
      name: "Bollywood",
      image: "/images/bollywood.jpg",
      description: "A lively dance form inspired by Indian cinema, blending various styles.",
    },
    {
      name: "Contemporary",
      image: "/images/contemporary.jpg",
      description: "A modern dance form that expresses emotions through fluid movements.",
    },
    {
        name: "Salsa",
        image: "/images/salsa.jpg",
        description: "A vibrant Latin dance with fast footwork and partner spins.",
    },
    {
        name: "Tap Dance",
        image: "/images/tap.jpg",
        description: "A rhythmic dance creating beats with special tap shoes.",
    },
   
  ];

  return (
    <div className="dance-styles-container">
      <header className="dance-header">
        <h1>Explore Our Dance Styles</h1>
        <p>
          Discover a variety of dance styles that celebrate culture, rhythm, and creativity.
        </p>
      </header>

      <div className="styles-grid">
        {styles.map((style, index) => (
          <div className="style-card" key={index}>
            <img src={style.image} alt={style.name} className="style-image" />
            <h3>{style.name}</h3>
            <p>{style.description}</p>
          </div>
        ))}
      </div>

    <footer className="cta-section">
        {/* Button to open enroll form */}
        <button
          className="cta-button"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Close Enroll Form" : "Join Your Favorite Dance Style"}
        </button>
      </footer>

      {/* Enroll Form */}
      {isFormVisible && (
        <div style={styles.formContainer}>
          <h2>Enroll Yourself</h2>
          <form onSubmit={handleFormSubmit}>
            <div style={styles.inputGroup}>
              <label>
                Full Name:
                <input type="text" name="name" required style={styles.input} />
              </label>
            </div>

            <div style={styles.inputGroup}>
              <label>
                Email:
                <input type="email" name="email" required style={styles.input} />
              </label>
            </div>

            <div style={styles.inputGroup}>
              <label>
                Contact Number:
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  style={styles.input}
                />
              </label>
            </div>

            <div style={styles.inputGroup}>
              <label>
                Select Course:
                <select name="course" required style={styles.input}>
                  <option value="">-- Select a Course --</option>
                  {styles.map((style, index) => (
                    <option key={index} value={style.name}>
                      {style.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div style={styles.inputGroup}>
              <label>
                Payment Amount:
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Amount (2000)"
                  required
                  style={styles.input}
                />
              </label>
            </div>

            <button type="submit" style={styles.submitButton}>
              Proceed to Payment
            </button>
          </form>

          {/* Payment Success Message */}
          {paymentSuccess && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Enrollment successful! 🎉
            </p>
          )}
        </div>
      )}

    </div>
  );
}



export default DanceStyles;
