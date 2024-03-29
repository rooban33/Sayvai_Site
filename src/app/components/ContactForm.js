'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    agreedTerms: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // Define formSubmitted state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here, for example, using fetch
    fetch('https://formspree.io/f/moqgdwyv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormSubmitted(true); // Update formSubmitted state
        // Optionally, you can reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          jobTitle: '',
          emailAddress: '',
          phoneNumber: '',
          message: '',
          agreedTerms: false
        });
      } else {
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div className="contact-area mtb-192">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             
              <h2 className="title-2">
                Get <span>in Touch</span>
              </h2>
            
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-content">
              <Image src="/img/logo.png" alt="logo" width={139} height={82} />
              <p>
                We&apos;re thrilled to connect with you and explore the possibilities of collaboration on exciting projects or discuss any inquiries you may have. Whether you&apos;re a fellow developer, a potential client, or someone who shares a passion for technology and innovation, SAYVAI is here to engage in meaningful conversations.
              </p>
              <h3>KASIVISWANATHAN I</h3>
              <h4>CO-FOUNDER</h4>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-form">
              <h2>Quick Responses Await!</h2>
              <p>
                Connect with us! Feel free to ask any questions or share your
                thoughts. We&apos;ll respond promptly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="First Name*"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Company Name*"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Job Title*"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Email Address*"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone Number*"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    name="agreedTerms"
                    checked={formData.agreedTerms}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I read and accept terms and conditions, privacy policy.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
