import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">
              Craft an AI Assistant <br />
              <span>in Minutes!</span>
            </h1>
            <p className="mx-850 text-center">
              Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5:
              Seamlessly Connect to Resources and Upload Files for Comprehensive
              Assistance.
            </p>
            <div className="hero-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/pricing" className="btn btn-tertiary">
                View Pricing
              </Link>
            </div>
            <div className="hero-chat mx-850">
              <div className="hero-chat-list">
                <div className="hero-chat-item">
                  <img src="/img/user.svg" alt="user" />
                  <div className="hero-chat-item-content">
                    <h3>
                      You <span>1:17 PM</span>
                    </h3>
                    <p>
                      What was the revenue generated during the Black Friday
                      Sale 2022 campaign?
                    </p>
                  </div>
                </div>
                <div className="hero-chat-item">
                  <img src="/img/user-assistify.svg" alt="user" />
                  <div className="hero-chat-item-content">
                    <h3>
                      Assistify <span>1:17 PM</span>
                    </h3>
                    <p>
                      The revenue generated during the Black Friday Sale 2022
                      campaign was $20,000.
                    </p>
                  </div>
                </div>
                <div className="hero-chat-item">
                  <img src="/img/user.svg" alt="user" />
                  <div className="hero-chat-item-content">
                    <h3>
                      You <span>1:17 PM</span>
                    </h3>
                    <p>
                      What was the open rate for the Black Friday Sale 2022
                      campaign?
                    </p>
                  </div>
                </div>
                <div className="hero-chat-item">
                  <img src="/img/user-assistify.svg" alt="user" />
                  <div className="hero-chat-item-content">
                    <h3>
                      Assistify <span>1:17 PM</span>
                    </h3>
                    <p>
                      The open rate for the Black Friday Sale 2022 campaign was
                      25%.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-chat-input">
                <input type="text" placeholder="Type your message" />
                <button>
                  <img src="/img/mail.svg" alt="brand" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
