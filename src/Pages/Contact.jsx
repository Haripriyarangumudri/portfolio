
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactSection = styled.section`
  padding: 80px 10px 10px;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 40px;

    span {
      color: #00d9ff;
    }
  }
`;

const ContactForm = styled.form`
  width: 600px;
  margin-left: 300px;

  .input-group {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #2b2b3b;
    color: #fff;
    font-size: 16px;

    &::placeholder {
      color: #aaa;
    }
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    padding: 15px 30px;
    background-color: #00d9ff;
    border: none;
    margin-top: 20px;
    border-radius: 25px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00b2d9;
    }
  }
`;

const StatusMessage = styled.p`
  color: ${props => (props.success ? "green" : "red")};
  font-weight: bold;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    emailjs
      .send(
        "service_28czgxg",
        "template_omqc9lo",
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          mobile: formData.mobile,
          subject: formData.subject,
          message: formData.message,
        },
        "lViKpKP-6PeO6Lcnl"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status);
          setStatusMessage("Message sent successfully!");

          // Clear input fields after sending the message
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setStatusMessage(`Failed to send message. Error: ${err.text}`);
        }
      );
  };

  return (
    <div>
      <ContactSection>
        <h1>Contact <span>Me!</span></h1>

        {/* Display the status message */}
        {statusMessage && (
          <StatusMessage success={statusMessage === "Message sent successfully!"}>
            {statusMessage}
          </StatusMessage>
        )}

        <ContactForm onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </ContactForm>
      </ContactSection>
    </div>
  );
};

export default Contact;
