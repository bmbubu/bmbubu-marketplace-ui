import { Link, useNavigate } from "react-router-dom";

export const RegistrationSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className="inner-page mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <div className="card">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12 col-sm-12 p-5">
                    <i className="fa-sharp fa-regular fa-circle-check fa-beat text-custom-primary fa-3x float-end"></i>
                    <h3>
                      <b>
                        Sign up <span className="text-warning">Success!</span>
                      </b>
                    </h3>
                    <p className="text-muted">
                      <small>Thank you for joining MyWorkProduct!</small>
                    </p>
                    <hr />
                    <p className="text-center my-5">
                      You're all set. Now you can purchase beautifully-designed,
                      professional templates to grow your business.
                    </p>
                    <div className="form-group my-3">
                      <Link
                        className="btn btn-primary-custom btn-block"
                        to={"/"}
                      >
                        Sign in to get started
                      </Link>
                    </div>
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
