export const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              The Journey in Life has
              <br />
              just gotten easier.
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Find an Expert or Become a Mentor
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Need Assistance</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                &nbsp;
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Offer Assistance</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                &nbsp;
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Post a Job</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
