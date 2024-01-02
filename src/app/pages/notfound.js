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
                          ERROR PAGE
  =========================================================-->
    <div class="error-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title-2"><span>404.</span></h2>
            <h3>Page not found</h3>
            <p>
              Oops! It seems you've ventured into uncharted territory. Let's
              guide you back on the right path.
            </p>
            <a href="/" class="btn btn-primary">Back to homepage</a>
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
