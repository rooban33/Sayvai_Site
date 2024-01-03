export default function Home() {
  return (
    <>
      <header>
        <div className="desktop-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-2">
                <a href="/">
                  <img src="/img/logo.svg" alt="logo" />
                </a>
              </div>
              <div className="col-md-8">
                <nav>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="examples.html">Examples</a>
                    </li>
                    <li>
                      <a href="integrations.html">Integrations</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 text-end">
                <a href="contact.html" className="btn btn-secondary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-header">
          <a href="/">
            <img src="/img/logo.svg" alt="logo" />
          </a>
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="examples.html">Examples</a>
                </li>
                <li>
                  <a href="integrations.html">Integrations</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            <a href="contact.html" className="btn btn-secondary">
              Get Started
            </a>
          </div>
        </div>
      </header>

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
                Seamlessly Connect to Resources and Upload Files for
                Comprehensive Assistance.
              </p>
              <div className="hero-btn">
                <a href="contact.html" className="btn btn-primary">
                  Get Started
                </a>
                <a href="pricing.html" className="btn btn-tertiary">
                  View Pricing
                </a>
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
                        The open rate for the Black Friday Sale 2022 campaign
                        was 25%.
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

      <div className="hero-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">Preferred by Teams at</p>
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/brand/1.png" alt="brand" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/brand/2.png" alt="brand" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/brand/3.png" alt="brand" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/brand/4.png" alt="brand" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/brand/5.png" alt="brand" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/brand/6.png" alt="brand" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area mt-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Elevate Your Productivity <span>to New Heights</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="feature-item">
                <img src="/img/icon/1.svg" alt="icon" />
                <h3>Skilled Companion</h3>
                <p>
                  Save time with automated information retrieval, eliminating
                  the need for manual searches or team inquiries.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <img src="/img/icon/1.svg" alt="icon" />
                <h3>Skilled Companion</h3>
                <p>
                  Save time with automated information retrieval, eliminating
                  the need for manual searches or team inquiries.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <img src="/img/icon/1.svg" alt="icon" />
                <h3>Skilled Companion</h3>
                <p>
                  Save time with automated information retrieval, eliminating
                  the need for manual searches or team inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solution-area mtb-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Your All-in-One Intelligent AI <span>Assistant Solution</span>
              </h2>
            </div>
            <div className="col-md-12">
              <div className="solution-item">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-47">
                    <img src="/img/solution.svg" alt="solution" />
                  </div>
                  <div className="col-md-6 pl-47">
                    <h3>Seamless Integrations</h3>
                    <p>
                      Effortlessly connect tools, databases, or import files.
                      Assistify ensures compatibility with various platforms and
                      file formats for a seamless experience.
                    </p>
                    <a href="#" className="btn btn-secondary">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-47">
                    <h3>Customized for Every Need</h3>
                    <p>
                      Craft dedicated assistants for teams, projects, or
                      workflows. Boost team efficiency by 90% with tailored data
                      access for each assistant.
                    </p>
                    <a href="#" className="btn btn-secondary">
                      Learn more
                    </a>
                  </div>
                  <div className="col-md-6 pl-47 mt-30">
                    <div className="solution-item-list">
                      <div className="solution-single">
                        <img src="/img/check.svg" alt="check" />
                        <div>
                          <h4>Marketing</h4>
                          <p>
                            Chat assistant for the marketing & paid ads team.
                          </p>
                        </div>
                      </div>
                      <div className="solution-single">
                        <img src="/img/check.svg" alt="check" />
                        <div>
                          <h4>Sales</h4>
                          <p>Chat assistant for the Sales teams.</p>
                        </div>
                      </div>
                      <div className="solution-single">
                        <img src="/img/check.svg" alt="check" />
                        <div>
                          <h4>Finance</h4>
                          <p>
                            Chat assistant for the Finance & Accounting teams.
                          </p>
                        </div>
                      </div>
                      <div className="solution-single">
                        <img src="/img/check.svg" alt="check" />
                        <div>
                          <h4>Engineering</h4>
                          <p>
                            Chat assistant for the Product & engineering teams.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-47">
                    <div className="solution-item-list solution-item-chat">
                      <div className="solution-chat-message">
                        <div className="solution-chat-message-item">
                          <img src="/img/user.svg" alt="user" />
                          <div className="solution-chat-message-item-content">
                            <h3>
                              Jane Cooper <span>8:42 PM</span>
                            </h3>
                            <p>
                              Hello team! Currently tackling year-end
                              accounting, and I have noticed a gap in our
                              invoices from MasterCard. Could someone assist me
                              in locating these missing invoices?
                            </p>
                          </div>
                        </div>
                        <div className="solution-chat-message-item">
                          <img src="/img/user-assistify.svg" alt="user" />
                          <div className="solution-chat-message-item-content">
                            <h3>
                              Assistify AI <span>8:42 PM</span>
                            </h3>
                            <p>Hey, I found two invoices for MasterCard</p>
                            <ol>
                              <li>Invoice #MC-2023-00100</li>
                              <li>Invoice #MC-2023-00101</li>
                            </ol>
                            <p>
                              They are located the archived section to
                              Xero.com/archived i hope this helps! let me know
                              if you need any additional info on these invoices.
                            </p>
                          </div>
                        </div>
                        <div className="solution-chat-message-item">
                          <img src="/img/user.svg" alt="user" />
                          <div className="solution-chat-message-item-content">
                            <h3>
                              Jane Cooper <span>8:42 PM</span>
                            </h3>
                            <p>Awesome!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pl-47 mt-30">
                    <h3>Assistance Everywhere</h3>
                    <p>
                      Integrate Assistify into your favorite applications with
                      our versatile options. From Slack to support apps, Zapier,
                      Email software, and beyond – Assistify is ready to assist
                      wherever you need it.
                    </p>
                    <a href="#" className="btn btn-secondary">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="solution-item">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-47">
                    <h3>Effortlessly Manage Data Access</h3>
                    <p>
                      Our intuitive system allows for easy customization,
                      ensuring your assistant aligns perfectly with the unique
                      demands of different scenarios.
                    </p>
                    <a href="#" className="btn btn-secondary">
                      Learn more
                    </a>
                  </div>
                  <div className="col-md-6 pl-47 mt-30">
                    <div className="solution-box-list">
                      <div className="solution-box-item">
                        <h4>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.0004"
                              r="11.5"
                              fill="#3D2C5C"
                              stroke="#493872"
                            />
                            <g clip-path="url(#clip0_819_4640)">
                              <path
                                d="M12.1919 4.00037C7.66821 4.00037 4 7.66794 4 12.1922C4 15.8117 6.34722 18.8823 9.60213 19.9656C10.0115 20.0414 10.1619 19.7878 10.1619 19.5715C10.1619 19.3761 10.1542 18.7308 10.1507 18.0463C7.87169 18.5418 7.39079 17.0797 7.39079 17.0797C7.01816 16.1329 6.48124 15.8811 6.48124 15.8811C5.73802 15.3727 6.53726 15.3831 6.53726 15.3831C7.35989 15.4409 7.79305 16.2273 7.79305 16.2273C8.52367 17.4797 9.70942 17.1176 10.1769 16.9083C10.2504 16.3788 10.4627 16.0175 10.697 15.8129C8.87748 15.6057 6.9647 14.9033 6.9647 11.7644C6.9647 10.8701 7.28472 10.1393 7.80879 9.56562C7.72372 9.35925 7.44335 8.52609 7.88813 7.39771C7.88813 7.39771 8.57603 7.17753 10.1415 8.23743C10.7949 8.05586 11.4957 7.96489 12.1919 7.9618C12.8881 7.96489 13.5894 8.05586 14.2441 8.23743C15.8077 7.17753 16.4946 7.39771 16.4946 7.39771C16.9405 8.52609 16.66 9.35925 16.5749 9.56562C17.1001 10.1393 17.418 10.87 17.418 11.7644C17.418 14.9108 15.5016 15.6036 13.6775 15.8064C13.9713 16.0606 14.2331 16.5592 14.2331 17.3234C14.2331 18.4194 14.2236 19.3016 14.2236 19.5715C14.2236 19.7895 14.371 20.0449 14.7863 19.9645C18.0394 18.88 20.3837 15.8105 20.3837 12.1922C20.3837 7.66794 16.716 4.00037 12.1919 4.00037Z"
                                fill="#CCCCE0"
                              />
                              <path
                                d="M7.06804 15.6699C7.05005 15.7106 6.98593 15.7228 6.92766 15.6949C6.86823 15.6682 6.83482 15.6126 6.8541 15.5718C6.87177 15.5299 6.93588 15.5182 6.99518 15.5463C7.05474 15.573 7.08867 15.629 7.06804 15.6699ZM7.471 16.0294C7.43194 16.0657 7.35555 16.0488 7.3037 15.9916C7.25012 15.9345 7.2401 15.8581 7.27974 15.8213C7.32002 15.7851 7.3941 15.802 7.44781 15.8592C7.50139 15.917 7.5118 15.9929 7.47094 16.0295M7.74746 16.4894C7.69722 16.5243 7.61511 16.4916 7.56442 16.4188C7.51424 16.346 7.51424 16.2586 7.56551 16.2236C7.61639 16.1886 7.69722 16.22 7.74862 16.2923C7.79873 16.3664 7.79873 16.4538 7.74739 16.4895M8.21492 17.0222C8.17002 17.0717 8.07441 17.0585 8.00438 16.9909C7.93281 16.9248 7.91283 16.8311 7.95787 16.7816C8.00329 16.732 8.09947 16.7459 8.17002 16.8129C8.24114 16.8788 8.26279 16.9733 8.21492 17.0222ZM8.81911 17.2021C8.79938 17.2662 8.70725 17.2954 8.61448 17.2682C8.52183 17.2401 8.46119 17.1649 8.47988 17.1001C8.49916 17.0355 8.59167 17.0051 8.68515 17.0343C8.77767 17.0623 8.83838 17.1369 8.81911 17.2021ZM9.50681 17.2784C9.50913 17.346 9.43042 17.402 9.33302 17.4032C9.23505 17.4053 9.15583 17.3507 9.1548 17.2842C9.1548 17.216 9.23171 17.1605 9.32962 17.1589C9.42702 17.157 9.50681 17.2113 9.50681 17.2784ZM10.1823 17.2525C10.194 17.3184 10.1263 17.3861 10.0296 17.4041C9.93451 17.4215 9.84649 17.3808 9.83435 17.3155C9.82253 17.2479 9.89153 17.1802 9.98642 17.1627C10.0833 17.1458 10.17 17.1855 10.1823 17.2525Z"
                                fill="#CCCCE0"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_819_4640">
                                <rect
                                  width="16.4474"
                                  height="16"
                                  fill="white"
                                  transform="translate(4 4.00037)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Github
                        </h4>
                        <ul>
                          <li>Releases: 2</li>
                          <li>Repositories: 3</li>
                          <li>Pull requests: 19</li>
                          <li>Issues: 47</li>
                        </ul>
                      </div>
                      <div className="solution-box-item">
                        <h4>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.0004"
                              r="11.5"
                              fill="#3D2C5C"
                              stroke="#493872"
                            />
                            <g clip-path="url(#clip0_819_4668)">
                              <path
                                d="M16.7295 7.74918C16.7199 7.67918 16.6586 7.64044 16.6079 7.63618C16.5573 7.63196 15.4868 7.55261 15.4868 7.55261C15.4868 7.55261 14.7433 6.81449 14.6617 6.73279C14.58 6.65114 14.4206 6.67598 14.3587 6.6942C14.3496 6.69688 14.1962 6.7442 13.9426 6.82269C13.6942 6.10802 13.2559 5.45126 12.4848 5.45126C12.4635 5.45126 12.4416 5.45213 12.4197 5.45337C12.2004 5.16335 11.9288 5.03735 11.6941 5.03735C9.89785 5.03735 9.03967 7.28287 8.77061 8.42396C8.07262 8.64024 7.57677 8.794 7.51343 8.8139C7.12383 8.93611 7.11151 8.94839 7.06035 9.31551C7.02185 9.59344 6.00244 17.477 6.00244 17.477L13.9459 18.9653L18.2499 18.0342C18.2499 18.0342 16.739 7.81918 16.7295 7.74918ZM13.5036 6.95847L12.8314 7.1665C12.8317 7.11913 12.8319 7.07253 12.8319 7.02157C12.8319 6.5774 12.7702 6.21978 12.6713 5.93628C13.0687 5.98614 13.3333 6.43822 13.5036 6.95847ZM12.1785 6.02435C12.2889 6.30114 12.3607 6.69837 12.3607 7.2344C12.3607 7.26182 12.3605 7.2869 12.3603 7.31226C11.9231 7.44766 11.4482 7.59466 10.9721 7.74213C11.2394 6.71055 11.7404 6.2123 12.1785 6.02435ZM11.6448 5.51915C11.7223 5.51915 11.8004 5.54548 11.8752 5.59692C11.2995 5.86781 10.6824 6.55007 10.4218 7.91253L9.32456 8.25237C9.62978 7.21316 10.3546 5.51915 11.6448 5.51915Z"
                                fill="#A6A6C9"
                              />
                              <path
                                d="M16.6079 7.63653C16.5573 7.63231 15.4868 7.55296 15.4868 7.55296C15.4868 7.55296 14.7433 6.81484 14.6617 6.73314C14.6311 6.70274 14.59 6.68716 14.5469 6.68045L13.9463 18.9656L18.2499 18.0346C18.2499 18.0346 16.739 7.81953 16.7295 7.74953C16.7199 7.67953 16.6585 7.64079 16.6079 7.63653Z"
                                fill="#B3B3D0"
                              />
                              <path
                                d="M12.4846 10.0147L11.9539 11.5934C11.9539 11.5934 11.4889 11.3452 10.919 11.3452C10.0834 11.3452 10.0413 11.8696 10.0413 12.0017C10.0413 12.7227 11.9208 12.999 11.9208 14.6878C11.9208 16.0165 11.078 16.8721 9.94174 16.8721C8.57817 16.8721 7.88086 16.0235 7.88086 16.0235L8.24596 14.8171C8.24596 14.8171 8.96274 15.4325 9.56757 15.4325C9.96278 15.4325 10.1235 15.1214 10.1235 14.894C10.1235 13.9535 8.58163 13.9116 8.58163 12.3661C8.58163 11.0654 9.51521 9.80673 11.3997 9.80673C12.1259 9.80673 12.4846 10.0147 12.4846 10.0147Z"
                                fill="#C0C0D8"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_819_4668">
                                <rect
                                  width="12.2752"
                                  height="14"
                                  fill="white"
                                  transform="translate(6 5.00037)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Shopify
                        </h4>
                        <ul>
                          <li>Orders: 432</li>
                          <li>Customers: 294</li>
                          <li>Inventory: 65</li>
                          <li>Products: 34</li>
                        </ul>
                      </div>
                      <div className="solution-box-item">
                        <h4>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.0004"
                              r="11.5"
                              fill="#3D2C5C"
                              stroke="#493872"
                            />
                            <g clip-path="url(#clip0_819_4654)">
                              <path
                                d="M10.6582 7.22244C11.1743 6.68478 11.8927 6.35131 12.6872 6.35131C13.7434 6.35131 14.6648 6.94025 15.1556 7.81455C15.582 7.62402 16.054 7.51803 16.5507 7.51803C18.4556 7.51803 20 9.07587 20 10.9975C20 12.9193 18.4556 14.4771 16.5507 14.4771C16.3225 14.4772 16.0949 14.4546 15.8712 14.4094C15.4391 15.1802 14.6156 15.701 13.6704 15.701C13.2748 15.701 12.9005 15.6097 12.5673 15.4471C12.1292 16.4776 11.1086 17.2001 9.91909 17.2001C8.68034 17.2001 7.62462 16.4163 7.21938 15.317C7.04229 15.3546 6.85881 15.3742 6.67054 15.3742C5.19568 15.3742 4 14.1662 4 12.6759C4 11.6771 4.53721 10.8051 5.33538 10.3385C5.17106 9.96044 5.07966 9.54311 5.07966 9.10435C5.07966 7.3904 6.47111 6.00101 8.18736 6.00101C9.19499 6.00101 10.0905 6.48009 10.6582 7.22244Z"
                                fill="#A6A6C9"
                              />
                              <path
                                d="M6.31758 11.8084C6.30755 11.8346 6.32123 11.8401 6.32442 11.8446C6.3545 11.8665 6.38505 11.8823 6.41582 11.8998C6.57901 11.9864 6.7331 12.0117 6.89424 12.0117C7.22244 12.0117 7.42619 11.8371 7.42619 11.5561V11.5506C7.42619 11.2908 7.19623 11.1964 6.98039 11.1283L6.95236 11.1192C6.78962 11.0663 6.64922 11.0207 6.64922 10.9136V10.9079C6.64922 10.8163 6.73127 10.7488 6.85846 10.7488C6.99977 10.7488 7.16752 10.7958 7.27555 10.8555C7.27555 10.8555 7.30722 10.876 7.31885 10.8452C7.32523 10.8288 7.37994 10.6816 7.38564 10.6656C7.39179 10.6483 7.38085 10.6355 7.36969 10.6287C7.24638 10.5537 7.07589 10.5024 6.89949 10.5024L6.86667 10.5026C6.56628 10.5026 6.35659 10.6841 6.35659 10.9441V10.9496C6.35659 11.2238 6.58793 11.3127 6.80469 11.3747L6.83956 11.3854C6.99751 11.4339 7.13358 11.4756 7.13358 11.5869V11.5923C7.13358 11.694 7.04515 11.7696 6.90247 11.7696C6.84708 11.7696 6.67044 11.7685 6.47968 11.6479C6.45665 11.6345 6.44321 11.6247 6.42543 11.614C6.41609 11.608 6.39261 11.5978 6.38236 11.6288L6.31758 11.8084ZM11.1224 11.8084C11.1123 11.8346 11.126 11.8401 11.1292 11.8446C11.1593 11.8665 11.1898 11.8823 11.2206 11.8998C11.3838 11.9864 11.5379 12.0117 11.699 12.0117C12.0272 12.0117 12.231 11.8371 12.231 11.5561V11.5506C12.231 11.2908 12.001 11.1964 11.7851 11.1283L11.7571 11.1192C11.5944 11.0663 11.454 11.0207 11.454 10.9136V10.9079C11.454 10.8163 11.536 10.7488 11.6632 10.7488C11.8045 10.7488 11.9723 10.7958 12.0803 10.8555C12.0803 10.8555 12.112 10.876 12.1236 10.8452C12.13 10.8288 12.1847 10.6816 12.1904 10.6656C12.1965 10.6483 12.1856 10.6355 12.1744 10.6287C12.0511 10.5537 11.8806 10.5024 11.7042 10.5024L11.6714 10.5026C11.371 10.5026 11.1613 10.6841 11.1613 10.9441V10.9496C11.1613 11.2238 11.3927 11.3127 11.6094 11.3747L11.6443 11.3854C11.8022 11.4339 11.9385 11.4756 11.9385 11.5869V11.5923C11.9385 11.694 11.8499 11.7696 11.7072 11.7696C11.6518 11.7696 11.4752 11.7685 11.2844 11.6479C11.2614 11.6345 11.2477 11.6251 11.2304 11.614C11.2245 11.6101 11.1967 11.5994 11.1871 11.6288L11.1224 11.8084ZM14.4024 11.2579C14.4024 11.4168 14.3728 11.5419 14.3145 11.6304C14.2568 11.7179 14.1695 11.7605 14.0478 11.7605C13.9259 11.7605 13.8391 11.7181 13.7823 11.6304C13.7248 11.5422 13.6957 11.4168 13.6957 11.2579C13.6957 11.0993 13.7248 10.9744 13.7823 10.8869C13.8391 10.8003 13.9259 10.7581 14.0478 10.7581C14.1695 10.7581 14.2568 10.8003 14.3147 10.8869C14.3728 10.9744 14.4024 11.0993 14.4024 11.2579ZM14.6764 10.9635C14.6495 10.8725 14.6076 10.7923 14.5517 10.7255C14.4959 10.6585 14.4253 10.6047 14.3414 10.5655C14.2577 10.5265 14.1588 10.5067 14.0478 10.5067C13.9366 10.5067 13.8377 10.5265 13.754 10.5655C13.6701 10.6047 13.5995 10.6585 13.5434 10.7255C13.4878 10.7925 13.4459 10.8727 13.4188 10.9635C13.3921 11.0539 13.3786 11.1529 13.3786 11.2579C13.3786 11.363 13.3921 11.4622 13.4188 11.5524C13.4459 11.6431 13.4876 11.7234 13.5437 11.7904C13.5995 11.8574 13.6704 11.9109 13.754 11.949C13.8379 11.987 13.9366 12.0064 14.0478 12.0064C14.1588 12.0064 14.2575 11.987 14.3414 11.949C14.425 11.9109 14.4959 11.8574 14.5518 11.7904C14.6076 11.7236 14.6495 11.6433 14.6764 11.5524C14.7033 11.4619 14.7168 11.3628 14.7168 11.2579C14.7168 11.1531 14.7033 11.0539 14.6764 10.9635ZM16.9261 11.7181C16.917 11.6914 16.8913 11.7014 16.8913 11.7014C16.8514 11.7167 16.809 11.7308 16.7639 11.7379C16.718 11.7449 16.6677 11.7486 16.6137 11.7486C16.481 11.7486 16.3757 11.7092 16.3003 11.6312C16.2246 11.5533 16.1822 11.4273 16.1827 11.2568C16.1831 11.1016 16.2205 10.9848 16.2877 10.896C16.3545 10.8075 16.4562 10.7622 16.5918 10.7622C16.7048 10.7622 16.791 10.7752 16.8812 10.8037C16.8812 10.8037 16.9029 10.813 16.9131 10.7847C16.9371 10.7182 16.9548 10.6705 16.9804 10.5974C16.9877 10.5766 16.9699 10.5678 16.9635 10.5652C16.9279 10.5513 16.8441 10.5288 16.7807 10.5192C16.7215 10.5101 16.6522 10.5053 16.5751 10.5053C16.46 10.5053 16.3575 10.5249 16.2697 10.5641C16.1822 10.6031 16.1079 10.6569 16.0491 10.7239C15.9903 10.7909 15.9456 10.8711 15.9158 10.9618C15.8861 11.0523 15.8711 11.1517 15.8711 11.2568C15.8711 11.484 15.9324 11.6677 16.0534 11.8022C16.1747 11.9371 16.3568 12.0057 16.5943 12.0057C16.7347 12.0057 16.8787 11.9772 16.9822 11.9364C16.9822 11.9364 17.0021 11.9268 16.9934 11.9038L16.9261 11.7181ZM17.4055 11.1058C17.4185 11.0176 17.4429 10.9441 17.4805 10.887C17.5372 10.8001 17.6238 10.7525 17.7456 10.7525C17.8673 10.7525 17.9477 10.8003 18.0054 10.887C18.0437 10.9441 18.0603 11.0208 18.0669 11.1058H17.4055ZM18.3279 10.9118C18.3046 10.824 18.247 10.7354 18.2091 10.6948C18.1494 10.6305 18.0911 10.5856 18.0332 10.5605C17.9575 10.5282 17.8668 10.5068 17.7674 10.5068C17.6516 10.5068 17.5466 10.5261 17.4613 10.5663C17.3759 10.6064 17.3041 10.6611 17.2478 10.7292C17.1915 10.7971 17.1491 10.8781 17.1222 10.9699C17.0951 11.0613 17.0814 11.1609 17.0814 11.266C17.0814 11.3729 17.0955 11.4725 17.1236 11.562C17.1518 11.6523 17.1969 11.7318 17.258 11.7977C17.3189 11.864 17.3973 11.916 17.4912 11.9522C17.5844 11.9882 17.6977 12.0069 17.8278 12.0067C18.0956 12.0058 18.2367 11.9461 18.2948 11.9139C18.3051 11.9082 18.3149 11.8982 18.3026 11.8695L18.242 11.6997C18.2329 11.6744 18.2071 11.6837 18.2071 11.6837C18.1407 11.7083 18.0464 11.7526 17.8264 11.7521C17.6826 11.7519 17.576 11.7095 17.5092 11.6432C17.4406 11.5752 17.4071 11.4754 17.4011 11.3346L18.3285 11.3355C18.3285 11.3355 18.3529 11.335 18.3555 11.3113C18.3564 11.3013 18.3874 11.1208 18.3279 10.9118ZM9.9783 11.1058C9.99151 11.0176 10.0157 10.9441 10.0533 10.887C10.11 10.8001 10.1966 10.7525 10.3183 10.7525C10.4401 10.7525 10.5205 10.8003 10.5784 10.887C10.6165 10.9441 10.6331 11.0208 10.6397 11.1058H9.9783ZM10.9004 10.9118C10.8772 10.824 10.8198 10.7354 10.7819 10.6948C10.7222 10.6305 10.6639 10.5856 10.606 10.5605C10.5303 10.5282 10.4396 10.5068 10.3402 10.5068C10.2247 10.5068 10.1194 10.5261 10.0341 10.5663C9.94868 10.6064 9.87688 10.6611 9.82059 10.7292C9.76429 10.7971 9.7219 10.8781 9.695 10.9699C9.66811 11.0613 9.65421 11.1609 9.65421 11.266C9.65421 11.3729 9.66834 11.4725 9.69638 11.562C9.72465 11.6523 9.76978 11.7318 9.83085 11.7977C9.89171 11.864 9.97011 11.916 10.064 11.9522C10.1572 11.9882 10.2705 12.0069 10.4007 12.0067C10.6685 12.0058 10.8095 11.9461 10.8677 11.9139C10.8779 11.9082 10.8877 11.8982 10.8754 11.8695L10.815 11.6997C10.8057 11.6744 10.7799 11.6837 10.7799 11.6837C10.7136 11.7083 10.6195 11.7526 10.3991 11.7521C10.2555 11.7519 10.1488 11.7095 10.082 11.6432C10.0134 11.5752 9.97993 11.4754 9.97399 11.3346L10.9014 11.3355C10.9014 11.3355 10.9258 11.335 10.9283 11.3113C10.9292 11.3013 10.9602 11.1208 10.9004 10.9118ZM7.97372 11.713C7.93747 11.684 7.93246 11.6768 7.92016 11.6581C7.90192 11.6296 7.89258 11.589 7.89258 11.5375C7.89258 11.4559 7.91947 11.3973 7.97532 11.3579C7.97464 11.3581 8.05509 11.2884 8.24426 11.2909C8.37713 11.2927 8.49587 11.3123 8.49587 11.3123V11.734H8.49609C8.49609 11.734 8.37826 11.7593 8.24562 11.7672C8.0569 11.7786 7.97303 11.7128 7.97372 11.713ZM8.34271 11.0614C8.3051 11.0586 8.25632 11.057 8.19797 11.057C8.11844 11.057 8.04162 11.0671 7.9696 11.0864C7.89713 11.1058 7.83194 11.1361 7.77587 11.1762C7.71988 11.2162 7.67387 11.2685 7.6414 11.3292C7.60858 11.3902 7.59194 11.4623 7.59194 11.543C7.59194 11.625 7.60607 11.6963 7.63434 11.7547C7.6626 11.8133 7.7034 11.862 7.75535 11.8997C7.80686 11.9373 7.87046 11.9648 7.94429 11.9815C8.01701 11.9981 8.09951 12.0065 8.18977 12.0065C8.28481 12.0065 8.37963 11.9988 8.47148 11.9831C8.56242 11.9676 8.6741 11.945 8.70509 11.9379C8.72682 11.9327 8.74847 11.9272 8.77005 11.9213C8.79308 11.9156 8.79125 11.891 8.79125 11.891L8.79079 11.0429C8.79079 10.8569 8.74111 10.719 8.64333 10.6336C8.546 10.5483 8.40264 10.5052 8.21735 10.5052C8.14783 10.5052 8.03592 10.5148 7.96891 10.5282C7.96891 10.5282 7.76629 10.5675 7.68286 10.6326C7.68286 10.6326 7.66464 10.644 7.67466 10.6696L7.74031 10.846C7.74851 10.8688 7.77063 10.861 7.77063 10.861C7.77063 10.861 7.7777 10.8583 7.78591 10.8535C7.96438 10.7564 8.19001 10.7594 8.19001 10.7594C8.2903 10.7594 8.36734 10.7794 8.4193 10.8193C8.46989 10.858 8.49565 10.9166 8.49565 11.0401V11.0794C8.41587 11.068 8.34271 11.0614 8.34271 11.0614ZM15.8227 10.5835C15.8297 10.5625 15.8149 10.5525 15.8087 10.5502C15.793 10.5441 15.7142 10.5274 15.6533 10.5236C15.5368 10.5165 15.4721 10.5361 15.4142 10.5621C15.3568 10.5881 15.293 10.63 15.2574 10.6776V10.5648C15.2574 10.5491 15.2462 10.5366 15.2307 10.5366H14.993C14.9775 10.5366 14.9664 10.5491 14.9664 10.5648V11.9481C14.9664 11.9636 14.9791 11.9763 14.9946 11.9763H15.2383C15.2457 11.9763 15.2529 11.9733 15.2581 11.968C15.2634 11.9627 15.2663 11.9555 15.2663 11.9481V11.257C15.2663 11.1643 15.2766 11.0717 15.2971 11.0136C15.3171 10.9562 15.3445 10.9101 15.3782 10.8771C15.4122 10.8443 15.4507 10.8212 15.4929 10.8083C15.5359 10.795 15.5835 10.7907 15.6173 10.7907C15.6658 10.7907 15.7192 10.8032 15.7192 10.8032C15.7369 10.8053 15.747 10.7943 15.7529 10.7782C15.7689 10.7358 15.814 10.6088 15.8227 10.5835Z"
                                fill="white"
                              />
                              <path
                                d="M13.5353 9.9424C13.5057 9.93329 13.4788 9.92713 13.4437 9.92053C13.4081 9.91415 13.3657 9.91095 13.3177 9.91095C13.1499 9.91095 13.0177 9.95836 12.9249 10.0518C12.8326 10.1448 12.7699 10.2863 12.7385 10.4726L12.7271 10.5352H12.5165C12.5165 10.5352 12.491 10.5343 12.4855 10.5621L12.4511 10.7552C12.4486 10.7734 12.4566 10.785 12.4812 10.785H12.6861L12.4782 11.9456C12.462 12.039 12.4433 12.1159 12.4226 12.1742C12.4023 12.2316 12.3825 12.2747 12.3579 12.3062C12.3342 12.3363 12.3118 12.3586 12.2731 12.3716C12.2412 12.3823 12.2042 12.3873 12.1639 12.3873C12.1416 12.3873 12.1117 12.3836 12.0896 12.3791C12.0677 12.3747 12.0561 12.37 12.0395 12.3629C12.0395 12.3629 12.0155 12.3538 12.006 12.3777C11.9984 12.3975 11.9437 12.5477 11.9371 12.5662C11.9307 12.5847 11.9399 12.599 11.9515 12.6034C11.9788 12.6129 11.9991 12.6193 12.0363 12.6282C12.0878 12.6403 12.1313 12.641 12.1721 12.641C12.2573 12.641 12.3353 12.6289 12.3998 12.6056C12.4645 12.5822 12.521 12.5414 12.5712 12.4862C12.6252 12.4265 12.6591 12.364 12.6915 12.2786C12.7237 12.1942 12.7513 12.0894 12.7731 11.9672L12.9821 10.785H13.2875C13.2875 10.785 13.3133 10.7859 13.3185 10.7579L13.3532 10.5651C13.3555 10.5466 13.3477 10.5352 13.3229 10.5352H13.0263C13.0279 10.5286 13.0414 10.4242 13.0753 10.326C13.0899 10.2843 13.1173 10.2503 13.1403 10.2271C13.1631 10.2043 13.1893 10.1881 13.218 10.1788C13.2474 10.1692 13.281 10.1646 13.3176 10.1646C13.3454 10.1646 13.373 10.1678 13.3938 10.1722C13.4225 10.1783 13.4336 10.1815 13.4412 10.1838C13.4715 10.1929 13.4756 10.184 13.4815 10.1694L13.5524 9.97481C13.5597 9.95379 13.5417 9.9449 13.5353 9.9424ZM9.3923 11.9481C9.3923 11.9636 9.38113 11.9762 9.36563 11.9762H9.1197C9.1042 11.9762 9.09326 11.9636 9.09326 11.9481V9.96885C9.09326 9.95336 9.1042 9.94082 9.1197 9.94082H9.36563C9.38113 9.94082 9.3923 9.95336 9.3923 9.96885V11.9481Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_819_4654">
                                <rect
                                  width="16"
                                  height="11.2"
                                  fill="white"
                                  transform="translate(4 6.00037)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Salesforce
                        </h4>
                        <ul>
                          <li>Invoices: 289</li>
                          <li>Customers: 177</li>
                          <li>Expenses: 34</li>
                          <li>Issues: 2</li>
                        </ul>
                      </div>
                      <div className="solution-box-item">
                        <h4>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12.0004"
                              r="11.5"
                              fill="#3D2C5C"
                              stroke="#493872"
                            />
                            <g clip-path="url(#clip0_819_4682)">
                              <path
                                d="M16.4 12.5979C16.3989 12.7033 16.3562 12.8039 16.2813 12.878C16.2064 12.9521 16.1054 12.9936 16 12.9936C15.8947 12.9936 15.7936 12.9521 15.7187 12.878C15.6438 12.8039 15.6011 12.7033 15.6 12.5979V9.00037C15.6011 8.89503 15.6438 8.79439 15.7187 8.7203C15.7936 8.64622 15.8947 8.60467 16 8.60467C16.1054 8.60467 16.2064 8.64622 16.2813 8.7203C16.3562 8.79439 16.3989 8.89503 16.4 9.00037V12.5979ZM16.2604 15.1017C16.1986 15.1546 14.7168 16.398 12 16.398C9.28322 16.398 7.8015 15.1545 7.73967 15.1016C7.65914 15.0326 7.60933 14.9343 7.6012 14.8286C7.59307 14.7228 7.62728 14.6181 7.69631 14.5376C7.7652 14.4571 7.86317 14.4073 7.96874 14.3991C8.0743 14.3908 8.17884 14.4247 8.25942 14.4934C8.28291 14.5131 9.60609 15.5979 12 15.5979C14.424 15.5979 15.7268 14.5053 15.7396 14.4943C15.907 14.3505 16.16 14.3698 16.3037 14.5376C16.3727 14.6182 16.407 14.7228 16.3989 14.8286C16.3908 14.9344 16.341 15.0326 16.2604 15.1017ZM7.59998 9.00037C7.60112 8.89503 7.64377 8.79439 7.71866 8.7203C7.79355 8.64622 7.89465 8.60467 7.99999 8.60467C8.10534 8.60467 8.20643 8.64622 8.28132 8.7203C8.35621 8.79439 8.39886 8.89503 8.4 9.00037V12.5979C8.39886 12.7033 8.35621 12.8039 8.28132 12.878C8.20643 12.9521 8.10534 12.9936 7.99999 12.9936C7.89465 12.9936 7.79355 12.9521 7.71866 12.878C7.64377 12.8039 7.60112 12.7033 7.59998 12.5979V9.00037ZM9.60005 8.20035C9.60166 8.09533 9.6445 7.99515 9.71934 7.92145C9.79418 7.84775 9.895 7.80644 10 7.80644C10.1051 7.80644 10.2059 7.84775 10.2807 7.92145C10.3556 7.99515 10.3984 8.09533 10.4 8.20035V13.5441C10.3984 13.6492 10.3556 13.7493 10.2807 13.823C10.2059 13.8967 10.1051 13.9381 10 13.9381C9.895 13.9381 9.79418 13.8967 9.71934 13.823C9.6445 13.7493 9.60166 13.6492 9.60005 13.5441V8.20035ZM11.6 7.99794C11.6 7.94542 11.6104 7.8934 11.6305 7.84487C11.6505 7.79634 11.68 7.75224 11.7172 7.7151C11.7543 7.67796 11.7984 7.64849 11.8469 7.62839C11.8955 7.6083 11.9475 7.59795 12 7.59796C12.0525 7.59795 12.1046 7.60828 12.1531 7.62838C12.2016 7.64848 12.2457 7.67794 12.2829 7.71508C12.32 7.75223 12.3495 7.79632 12.3696 7.84486C12.3897 7.89339 12.4 7.94541 12.4 7.99794V13.7979C12.3989 13.9033 12.3562 14.0039 12.2814 14.078C12.2065 14.1521 12.1054 14.1936 12 14.1936C11.8947 14.1936 11.7936 14.1521 11.7187 14.078C11.6438 14.0039 11.6012 13.9033 11.6 13.7979V7.99794ZM13.6 8.20035C13.6016 8.09533 13.6445 7.99515 13.7193 7.92145C13.7942 7.84775 13.895 7.80644 14 7.80644C14.1051 7.80644 14.2059 7.84775 14.2807 7.92145C14.3555 7.99515 14.3984 8.09533 14.4 8.20035V13.5441C14.3984 13.6492 14.3555 13.7493 14.2807 13.823C14.2059 13.8967 14.1051 13.9381 14 13.9381C13.895 13.9381 13.7942 13.8967 13.7193 13.823C13.6445 13.7493 13.6016 13.6492 13.6 13.5441V8.20035ZM16.5 6.00037H7.5C6.67158 6.00037 6 6.67194 6 7.50037V16.5004C6 17.3287 6.67158 18.0004 7.5 18.0004H16.5C17.3284 18.0004 18 17.3287 18 16.5004V7.50037C18 6.67194 17.3284 6.00037 16.5 6.00037Z"
                                fill="#A6A6C9"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_819_4682">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                  transform="translate(6 6.00037)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Intercom
                        </h4>
                        <ul>
                          <li>Documents: 56</li>
                          <li>Database: 3</li>
                          <li>Reminders: 179</li>
                          <li>Sheets: 19</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="faq-area mx-850 mtb-192 mx-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Frequently Asked <span>Questions</span>
              </h2>
              <div className="accordion" id="accordionInner">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
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
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionInner"
                  >
                    <div className="accordion-body">
                      Create as many assistants as you need! Enjoy unlimited
                      flexibility by connecting each assistant to unique
                      integrations and data sources. This allows them to cater
                      to various teams, employees, or specific use cases
                      seamlessly, with no restrictions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
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
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionInner"
                  >
                    <div className="accordion-body">
                      Create as many assistants as you need! Enjoy unlimited
                      flexibility by connecting each assistant to unique
                      integrations and data sources. This allows them to cater
                      to various teams, employees, or specific use cases
                      seamlessly, with no restrictions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Is it possible to personalize my assistant chat page?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionInner"
                  >
                    <div className="accordion-body">
                      Create as many assistants as you need! Enjoy unlimited
                      flexibility by connecting each assistant to unique
                      integrations and data sources. This allows them to cater
                      to various teams, employees, or specific use cases
                      seamlessly, with no restrictions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What the time frame for setting up and launching the
                      assistant?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionInner"
                  >
                    <div className="accordion-body">
                      Create as many assistants as you need! Enjoy unlimited
                      flexibility by connecting each assistant to unique
                      integrations and data sources. This allows them to cater
                      to various teams, employees, or specific use cases
                      seamlessly, with no restrictions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How customizable is the AI assistant interface and
                      functionality?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionInner"
                  >
                    <div className="accordion-body">
                      Create as many assistants as you need! Enjoy unlimited
                      flexibility by connecting each assistant to unique
                      integrations and data sources. This allows them to cater
                      to various teams, employees, or specific use cases
                      seamlessly, with no restrictions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ready-section">
              <h2 className="title-2">
                Ready to <span>Begin?</span>
              </h2>
              <p>
                Embark on the journey of creating your very own AI-powered
                assistant effortlessly.
              </p>
              <a href="contact.html" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <img src="/img/logo.svg" alt="logo" />
              <p>
                Step into the future of effortless assistance, where innovation
                meets simplicity.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="footer-item">
                    <h2>Product</h2>
                    <ul>
                      <li>
                        <a href="examples.html">Examples</a>
                      </li>
                      <li>
                        <a href="integrations.html">Integrations</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-item">
                    <h2>Company</h2>
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-item">
                    <h2>Connect</h2>
                    <ul>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Discord</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row gy-2">
              <div className="col-md-6 align-self-center">
                <p>Copyright © 2023 Assistify. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>
                    <a href="terms-of-service.html">Terms of Service</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
