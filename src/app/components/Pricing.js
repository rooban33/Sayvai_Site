import React from 'react';

export default function Price() {
  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Select a <span>Pricing Plan</span>
            </h2>
            <div className="pricing-tab">
              <button
                className="active"
                onclick="togglePricing('monthly', this)"
              >
                Monthly
              </button>
              <button onclick="togglePricing('yearly', this)">Yearly</button>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div
              className="pricing-item"
              data-monthly-price="$9"
              data-yearly-price="$99"
            >
              <h3>Starter</h3>
              <p>Perfect for individuals.</p>
              <h4>
                <span>$9</span>
                <sub>/m</sub>
              </h4>
              <p>Pause or cancel anytime</p>
              <div className="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Team members: 1
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Users: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Integrations: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Total message: 150
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Assistants: 2
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="pricing-item"
              data-monthly-price="$29"
              data-yearly-price="$269"
            >
              <h3>
                Business <img src="/img/pro-btn.svg" alt="pro" />
              </h3>
              <p>Perfect for small businesses.</p>
              <h4>
                <span>$9</span>
                <sub>/m</sub>
              </h4>
              <p>Pause or cancel anytime</p>
              <div className="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Team members: 3
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Users: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Integrations: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Total message: 650
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Assistants: 5
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="pricing-item"
              data-monthly-price="$59"
              data-yearly-price="$699"
            >
              <h3>Professional</h3>
              <p>Perfect for larger businesses.</p>
              <h4>
                <span>$9</span>
                <sub>/m</sub>
              </h4>
              <p>Pause or cancel anytime</p>
              <div className="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Team members: 1
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Users: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Integrations: Unlimited
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Total message: 1650
                </li>
                <li>
                  <img src="/img/check.svg" alt="check" />
                  Assistants: 12
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
