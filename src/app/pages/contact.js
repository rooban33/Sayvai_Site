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
              Contact
              <span>Us</span>
            </h1>
            <p class="mx-850 text-center">
              Got questions? Reach out! We're here and ready to assist.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================================
                          CONTACT
  =========================================================-->
    <div class="contact-area mtb-192">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title-2">Get <span>in Touch</span></h2>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="contact-content">
              <img src="assets/img/logo.svg" alt="logo" />
              <p>
                OpenAI presented Assistify with a range of challenging tasks,
                featuring tight latency requirements, substantial ambiguity, and
                instances of incorrect answers. In turn, Assistify collaborated
                closely to tailor their QA systems to our specific requirements.
              </p>
              <h3>John Lawson</h3>
              <h4>Member of Technical Staff</h4>
              <h5>Trusted by the world's most ambitious teams</h5>
              <div class="contact-brand">
                <img src="assets/img/brand/1.png" alt="brand" />
                <img src="assets/img/brand/2.png" alt="brand" />
                <img src="assets/img/brand/3.png" alt="brand" />
                <img src="assets/img/brand/4.png" alt="brand" />
                <img src="assets/img/brand/5.png" alt="brand" />
                <img src="assets/img/brand/6.png" alt="brand" />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="contact-form">
              <h2>Quick Responses Await!</h2>
              <p>
                Connect with us! Feel free to ask any questions or share your
                thoughts. We'll respond promptly.
              </p>
              <form action="">
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name*" required />
                  </div>
                  <div class="input-group">
                    <input type="text" placeholder="Company Name*" required />
                    <input type="text" placeholder="Job Title*" required />
                  </div>
                  <div class="input-group">
                    <input type="text" placeholder="Email Address*" required />
                    <input type="text" placeholder="Phone Number*" required />
                  </div>
                  <input type="text" placeholder="How can we help?" required />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I read and accept terms and conditions, privacy policy.
                  </label>
                </div>
                <button class="btn btn-primary">Submit</button>
              </form>
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
