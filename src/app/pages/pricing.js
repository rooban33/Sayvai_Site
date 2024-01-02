<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="assets/img/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/styles.css" />
    <title>Assistify</title>
  </head>
  <body>
    <!--=======================================================
                          HEADER
  =========================================================-->
    <header>
      <div class="desktop-header">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-2">
              <a href="/"><img src="assets/img/logo.svg" alt="logo" /></a>
            </div>
            <div class="col-md-8">
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="examples.html">Examples</a></li>
                  <li><a href="integrations.html">Integrations</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-md-2 text-end">
              <a href="contact.html" class="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-header">
        <a href="/"><img src="assets/img/logo.svg" alt="logo" /></a>
        <span class="mobile-menu-open-icon">
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
        <div class="mobile-menu">
          <strong class="mobile-menu-close-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
              />
            </svg>
          </strong>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="examples.html">Examples</a></li>
              <li><a href="integrations.html">Integrations</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <a href="contact.html" class="btn btn-secondary">Get Started</a>
        </div>
      </div>
    </header>
    <!--=======================================================
                          HERO
  =========================================================-->
    <div class="hero-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title">
              Pricing
              <span>Plans</span>
            </h1>
            <p class="mx-850 text-center">
              Join our exclusive beta program to experience Assistify for free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          PRICING
  =========================================================-->
    <div class="pricing-area mtb-192">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title-2">Select a <span>Pricing Plan</span></h2>
            <div class="pricing-tab">
              <button class="active" onclick="togglePricing('monthly', this)">
                Monthly
              </button>
              <button onclick="togglePricing('yearly', this)">Yearly</button>
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-md-4">
            <div
              class="pricing-item"
              data-monthly-price="$9"
              data-yearly-price="$99"
            >
              <h3>Starter</h3>
              <p>Perfect for individuals.</p>
              <h4><span>$9</span><sub>/m</sub></h4>
              <p>Pause or cancel anytime</p>
              <div class="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g>
                  </svg>
                  Team members: 1
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Users: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Integrations: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Total message: 150
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Assistants: 2
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="pricing-item"
              data-monthly-price="$29"
              data-yearly-price="$269"
            >
              <h3>Business <img src="assets/img/pro-btn.svg" alt="pro" /></h3>
              <p>Perfect for small businesses.</p>
              <h4><span>$9</span><sub>/m</sub></h4>
              <p>Pause or cancel anytime</p>
              <div class="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g>
                  </svg>
                  Team members: 3
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Users: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Integrations: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Total message: 650
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Assistants: 5
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="pricing-item"
              data-monthly-price="$59"
              data-yearly-price="$699"
            >
              <h3>Professional</h3>
              <p>Perfect for larger businesses.</p>
              <h4><span>$9</span><sub>/m</sub></h4>
              <p>Pause or cancel anytime</p>
              <div class="pricing-button">
                <button>Start Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g>
                  </svg>
                  Team members: 1
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Users: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Integrations: Unlimited
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Total message: 1650
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.0005"
                      r="11.5"
                      fill="#3D2C5C"
                      stroke="#493872"
                    />
                    <mask
                      id="mask0_822_2047"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="4"
                      width="24"
                      height="25"
                    >
                      <rect
                        x="4"
                        y="4.00049"
                        width="24"
                        height="24"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_822_2047)">
                      <path
                        d="M10.3667 16.1283L6.43915 12.2007L7.52066 11.1192L10.3667 13.9652L16.4794 7.85254L17.5609 8.93406L10.3667 16.1283Z"
                        fill="#CCCCE0"
                      />
                    </g></svg
                  >Assistants: 12
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          FAQ
  =========================================================-->
    <div class="faq-area mx-850 mtb-192 mx-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title-2">Frequently Asked <span>Questions</span></h2>
            <div class="accordion" id="accordionInner">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the limit on creating assistants?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionInner"
                >
                  <div class="accordion-body">
                    Create as many assistants as you need! Enjoy unlimited
                    flexibility by connecting each assistant to unique
                    integrations and data sources. This allows them to cater to
                    various teams, employees, or specific use cases seamlessly,
                    with no restrictions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is it possible to control the data accessible to an
                    assistant?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div class="accordion-body">
                    Create as many assistants as you need! Enjoy unlimited
                    flexibility by connecting each assistant to unique
                    integrations and data sources. This allows them to cater to
                    various teams, employees, or specific use cases seamlessly,
                    with no restrictions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is it possible to personalize my assistant's chat page?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div class="accordion-body">
                    Create as many assistants as you need! Enjoy unlimited
                    flexibility by connecting each assistant to unique
                    integrations and data sources. This allows them to cater to
                    various teams, employees, or specific use cases seamlessly,
                    with no restrictions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What's the time frame for setting up and launching the
                    assistant?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div class="accordion-body">
                    Create as many assistants as you need! Enjoy unlimited
                    flexibility by connecting each assistant to unique
                    integrations and data sources. This allows them to cater to
                    various teams, employees, or specific use cases seamlessly,
                    with no restrictions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How customizable is the AI assistant's interface and
                    functionality?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div class="accordion-body">
                    Create as many assistants as you need! Enjoy unlimited
                    flexibility by connecting each assistant to unique
                    integrations and data sources. This allows them to cater to
                    various teams, employees, or specific use cases seamlessly,
                    with no restrictions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          BRAND
  =========================================================-->
    <div class="hero-brand mtb-192">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="text-center">Preferred by Teams at</p>
            <ul>
              <li>
                <a href="#"><img src="assets/img/brand/1.png" alt="brand" /></a>
              </li>
              <li>
                <a href="#"><img src="assets/img/brand/2.png" alt="brand" /></a>
              </li>
              <li>
                <a href="#"><img src="assets/img/brand/3.png" alt="brand" /></a>
              </li>
              <li>
                <a href="#"><img src="assets/img/brand/4.png" alt="brand" /></a>
              </li>
              <li>
                <a href="#"><img src="assets/img/brand/5.png" alt="brand" /></a>
              </li>
              <li>
                <a href="#"><img src="assets/img/brand/6.png" alt="brand" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          NEWSLETTER
  =========================================================-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="ready-section">
            <h2 class="title-2">Ready to <span>Begin?</span></h2>
            <p>
              Embark on the journey of creating your very own AI-powered
              assistant effortlessly.
            </p>
            <a href="contact.html" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          FOOTER
  =========================================================-->
    <footer>
      <div class="container">
        <div class="row gy-4">
          <div class="col-md-6">
            <img src="assets/img/logo.svg" alt="logo" />
            <p>
              Step into the future of effortless assistance, where innovation
              meets simplicity.
            </p>
          </div>
          <div class="col-md-6">
            <div class="row gy-4">
              <div class="col-md-4">
                <div class="footer-item">
                  <h2>Product</h2>
                  <ul>
                    <li><a href="examples.html">Examples</a></li>
                    <li><a href="integrations.html">Integrations</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-item">
                  <h2>Company</h2>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-item">
                  <h2>Connect</h2>
                  <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Discord</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row gy-2">
            <div class="col-md-6 align-self-center">
              <p>Copyright © 2023 Assistify. All rights reserved.</p>
            </div>
            <div class="col-md-6">
              <ul>
                <li><a href="terms-of-service.html">Terms of Service</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/custom.js"></script>
  </body>
</html>
