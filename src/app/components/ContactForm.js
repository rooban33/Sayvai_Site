import React from 'react';

export default function ContactForm() {
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
              <img src="/img/logo.svg" alt="logo" />
              <p>
                OpenAI presented Assistify with a range of challenging tasks,
                featuring tight latency requirements, substantial ambiguity, and
                instances of incorrect answers. In turn, Assistify collaborated
                closely to tailor their QA systems to our specific requirements.
              </p>
              <h3>John Lawson</h3>
              <h4>Member of Technical Staff</h4>
              <h5>Trusted by the world&apos;s most ambitious teams</h5>
              <div className="contact-brand">
                <img src="/img/brand/1.png" alt="brand" />
                <img src="/img/brand/2.png" alt="brand" />
                <img src="/img/brand/3.png" alt="brand" />
                <img src="/img/brand/4.png" alt="brand" />
                <img src="/img/brand/5.png" alt="brand" />
                <img src="/img/brand/6.png" alt="brand" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-form">
              <h2>Quick Responses Await!</h2>
              <p>
                Connect with us! Feel free to ask any questions or share your
                thoughts. We&apos;ll respond promptly.
              </p>
              <form action="">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name*" required />
                  </div>
                  <div className="input-group">
                    <input type="text" placeholder="Company Name*" required />
                    <input type="text" placeholder="Job Title*" required />
                  </div>
                  <div className="input-group">
                    <input type="text" placeholder="Email Address*" required />
                    <input type="text" placeholder="Phone Number*" required />
                  </div>
                  <input type="text" placeholder="How can we help?" required />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I read and accept terms and conditions, privacy policy.
                  </label>
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
