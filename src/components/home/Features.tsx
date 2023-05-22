export const Features = () => {
  return (
    <section id="features" className="features bg-light">
      <div className="container" data-aos="fade-up">
        <div className="row feature-icons" data-aos="fade-up">
          <h3>Trust and Safety</h3>
          <div className="row">
            <div
              className="col-xl-4 text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src="assets/images/data-protection.png"
                className="img-fluid p-4"
                alt=""
              />
            </div>
            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">
                <div className="col-md-12 icon-box" data-aos="fade-up">
                  <i className="bi bi-patch-check"></i>
                  <div>
                    <h4>Proof of quality</h4>
                    <p>
                      Check any pro's work samples, client reviews, and identity
                      verification.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-12 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-piggy-bank"></i>
                  <div>
                    <h4>No cost until you hire</h4>
                    <p>
                      Interview potential fits for your job. Negotiate rates,
                      and only pay for work you approve.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-12 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-fingerprint"></i>
                  <div>
                    <h4>Safe and secure</h4>
                    <p>
                      Focus on your work knowing we help protect your data and
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
