import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" required></input>
        <label>Your Email</label>
        <input type="email" required></input>
        <label>Subject</label>
        <input type="text" required></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here..." required />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form