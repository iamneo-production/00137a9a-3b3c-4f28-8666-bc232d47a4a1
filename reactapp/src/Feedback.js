import React, { useState } from 'react';
import axios from 'axios';
import "./Feedback.css";
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/post', formData);
      console.log('Feedback submitted successfully!');
      alert('Feedback submitted successfully!');
      navigate("/Home");
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      alert('An error occurred while submitting feedback.');
    }
  };

  return (
    <div className='bala'>
    <div className="feedback-container">
      <h1 className="feedback-heading">Feedback Form</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>

        <label className="feedback-label" htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="feedback-input" required />
        <br />
        
        <label className="feedback-label" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="feedback-input" required />
        <br />

        <label className="feedback-label" htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="4" className="feedback-textarea" required></textarea>
        <br />

        <button type="submit" className="feedback-submit-btn">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
