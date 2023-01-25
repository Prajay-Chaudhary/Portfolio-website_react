import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l9j07fh",
        "template_xrsf87o",
        form.current,
        "cf45PitOTu4s5g5mJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required></input>
        <label>Your Email</label>
        <input type="email" name="user_email" required></input>
        <label>Subject</label>
        <input type="text" name="user_subject" required></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here..."
          name="user_message"
          required
        />
        <button className="btn" type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
