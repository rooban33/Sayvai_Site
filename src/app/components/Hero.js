import Link from 'next/link';
import React from 'react';
import Chat from './Chat';

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
            Seamlessly Connect to Resources in your business
            </p>
            <div className="hero-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/pricing" className="btn btn-tertiary">
                View Pricing
              </Link>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
