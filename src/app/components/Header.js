import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="desktop-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2">
              <Link href="/">
                <img src="/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="col-md-8">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/examples">Examples</Link>
                  </li>
                  <li>
                    <Link href="/integrations">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 text-end">
              <Link href="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <Link href="/">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
        <span className="mobile-menu-open-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M12 17H19M5 12H19M5 7H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </span>
        <div className="mobile-menu">
          <strong className="mobile-menu-close-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </strong>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/examples">Examples</Link>
              </li>
              <li>
                <Link href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
