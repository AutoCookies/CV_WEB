import React from 'react';
import { useFeedbackForm } from './FeedBackLogic.js'; // Correct import path
import './feedStyles.css'; // Ensure the path is correct
import { Link } from "react-router-dom";

export default function Feedback() {
  const {
    formData,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useFeedbackForm();

  return (
    <div className='feedback'>
      <Link to="/" className="btn return-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
          Return
      </Link>
      <h1>GIVE ME YOUR FEEDBACK, LET ME KNOW WHAT YOU THINK</h1>
      {success && <p className="success-message">Your feedback has been submitted successfully!</p>}
      {error && <p className="error-message">Failed to submit feedback. Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <input
            type="text"
            name="name"
            placeholder='Your name/nickname'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='comment'>
          <textarea
            name="comment"
            placeholder='Tell me your opinion'
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
