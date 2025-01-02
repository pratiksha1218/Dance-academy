import React, { useState } from "react";

const EnrollForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setPaymentSuccess(false); // Reset payment success if toggling form
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate payment success
    alert("Redirecting to Payment...");
    setTimeout(() => {
      setPaymentSuccess(true);
      alert("Payment Successful!");
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {/* Button to toggle the enroll form */}
      <button onClick={handleToggleForm} style={styles.button}>
        {isFormVisible ? "Close Enroll Form" : "Enroll Now"}
      </button>

      {/* Conditional rendering of enroll form */}
      {isFormVisible && (
        <div style={styles.formContainer}>
          <h2>Enroll for Dance Academy</h2>
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
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="Classical Dance">Classical Dance</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Salsa">Salsa</option>
                </select>
              </label>
            </div>
            <div style={styles.inputGroup}>
              <label>
                Payment Amount:
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Amount (e.g., 500)"
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
};

// Inline Styles
const styles = {
  button: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  formContainer: {
    marginTop: "1rem",
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "1rem auto",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#008CBA",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default EnrollForm;
