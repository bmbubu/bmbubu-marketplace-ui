import React, { useEffect } from "react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="features">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>How it Works</h2>
          <p>
            Work with highly efficient, talented individuals from your community
            and support locals.
          </p>
        </header>

        <div className="row feture-tabs mt-5" data-aos="fade-up">
          <div className="col-lg-6">
            <ul className="nav nav-pills mb-3">
              <li>
                <a
                  className="nav-link text-custom-primary active"
                  data-bs-toggle="pill"
                  href="#tab1"
                >
                  <i className="fa-solid fa-people-carry-box fa-xl me-2"></i>{" "}
                  Sellers Journey
                </a>
              </li>
              <li>
                <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                  <i className="fa-solid fa-person-walking-luggage fa-xl me-2"></i>{" "}
                  Buyers Journey
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <p className="fw-bolder">Revolutionize the Way You Work!</p>
                <img
                  src="assets/images/how-it-works/idea.gif"
                  className="how-it-works-img"
                  alt=""
                />
                <div className="d-flex align-items-center mb-1">
                  <i className="bi bi-check2"></i>
                  <h4>Step 1</h4>
                </div>
                <p className="mb-5">
                  Create your own freelance business and start making money from
                  your skills and experiences.
                </p>
                <img
                  src="assets/images/how-it-works/clipboard.gif"
                  className="how-it-works-img"
                  alt=""
                />
                <div className="d-flex align-items-center mb-1">
                  <i className="bi bi-check2"></i>
                  <h4>Step 2</h4>
                </div>
                <p className="mb-5">
                  No college degree is needed, and we welcome applicants of all
                  backgrounds. Register and complete the survey.
                </p>
                <img
                  src="assets/images/how-it-works/click.gif"
                  className="how-it-works-img"
                  alt=""
                />
                <div className="d-flex align-items-center mb-1">
                  <i className="bi bi-check2"></i>
                  <h4>Step 3</h4>
                </div>
                <p className="mb-5">
                  We will match your skills and preferences to our templates and
                  tools to help your business grow.
                </p>
                <img
                  src="assets/images/how-it-works/social-care.gif"
                  className="how-it-works-img"
                  alt=""
                />
                <div className="d-flex align-items-center mb-1">
                  <i className="bi bi-check2"></i>
                  <h4>Step 4</h4>
                </div>
                <p className="mb-5">
                  Take control of your work life! Schedule your availability,
                  take on clients and earn money.
                </p>
              </div>

              <div className="tab-pane fade show" id="tab2">
                <p className="fw-bolder">
                  Work with highly efficient, talented individuals from your
                  community and support locals.
                </p>
                <p className="mb-5">
                  <img
                    src="assets/images/how-it-works/save-money.gif"
                    className="how-it-works-img"
                    alt=""
                  />
                  <br />
                  Affordable and efficient
                </p>
                <p className="mb-5">
                  <img
                    src="assets/images/how-it-works/settings.gif"
                    className="how-it-works-img"
                    alt=""
                  />
                  <br />
                  Automate lifecycle burdensome tasks
                </p>
                <p className="mb-5">
                  <img
                    src="assets/images/how-it-works/user.gif"
                    className="how-it-works-img"
                    alt=""
                  />
                  <br />
                  Experience peace of mind
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src="assets/images/features-2.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
