import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RegisterRequestDto } from "../lib/data-transfer-object/register.dto";
import {
  REGISTRATION_SEE_PRIVACY,
  REGISTRATION_TERMS,
  REGISTRATION_USE_OF_DATA,
} from "../lib/common/tms";
import { usePost } from "../lib/hooks/usePost";
import { REGISTER_URL } from "../lib/common/api-url";

export const Register = () => {
  const initialValues: RegisterRequestDto = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    contactNo: "",
    zipCode: "",
    roleid: 2,
  };

  const [registerDto, setRegisterDto] =
    useState<RegisterRequestDto>(initialValues);

  const [terms, setTerms] = useState<boolean>(false);
  const [useOfData, setUseOfData] = useState<boolean>(false);

  const registerUser = usePost<unknown>();

  const onSignUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    //registerUser(REGISTER_URL, registerDto);
    console.log("foo");
    <Link to="registration-success" />;
  };

  const onInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterDto({ ...registerDto, [event.target.id]: event.target.value });
  };

  const onTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  };

  const onUseData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setUseOfData(true);
    } else {
      setUseOfData(false);
    }
  };

  const validateForm = (): boolean => {
    let canProceed: boolean = false;
    if (!terms) {
      // Error that Terms should Checked
      canProceed = false;
    }

    // Password and Confirm Password is not match

    return canProceed;
  };

  useEffect(() => {
    document.title = "Register | MyWorkProduct";
  });

  return (
    <section className="inner-page mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <div className="card">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12 p-5">
                    <h3>
                      <b>Sign up</b>
                    </h3>
                    <p className="text-muted">
                      <small>
                        Already have an account?
                        <Link to="/"> Sign In</Link>
                      </small>
                    </p>
                    <hr />
                    <form className="mt-0">
                      <section id="features" className="features m-0 p-0">
                        <div className="row feture-tabs m-0 p-0">
                          <div className="col-12 m-0 p-0">
                            <ul className="nav nav-pills mb-3">
                              <li>
                                <a
                                  className="nav-link active"
                                  data-bs-toggle="pill"
                                  href="#tab1"
                                >
                                  Step 1
                                </a>
                              </li>
                              <li>
                                <a
                                  className="nav-link"
                                  data-bs-toggle="pill"
                                  href="#tab2"
                                >
                                  Step 2
                                </a>
                              </li>
                            </ul>

                            <div className="tab-content">
                              <div
                                className="tab-pane fade show active"
                                id="tab1"
                              >
                                <p className="text-custom-primary text-right">
                                  <b>Personal Information:</b>
                                </p>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={registerDto.firstName}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={registerDto.lastName}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="contactNo"
                                    placeholder="+1 5589 55488 55"
                                    value={registerDto.contactNo}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    placeholder="United States with Zip Code"
                                    value={registerDto.zipCode}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                              </div>

                              <div className="tab-pane fade show" id="tab2">
                                <p className="text-custom-primary text-right">
                                  <b>Account Information:</b>
                                </p>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email@example.com"
                                    value={registerDto.email}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={registerDto.password}
                                    onChange={(e) => onInputTextChange(e)}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="confirm_password"
                                    placeholder="Confirm Password"
                                  />
                                </div>

                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="terms-of-service"
                                    checked={terms}
                                    onChange={(e) => onTerms(e)}
                                  />
                                  &nbsp;
                                  <label
                                    className="form-check-label text-muted small"
                                    htmlFor="terms-of-service"
                                  >
                                    {REGISTRATION_TERMS}
                                  </label>
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="privacy-policy"
                                    checked={useOfData}
                                    onChange={(e) => onUseData(e)}
                                  />
                                  &nbsp;
                                  <label
                                    className="form-check-label text-muted small"
                                    htmlFor="privacy-policy"
                                  >
                                    {REGISTRATION_USE_OF_DATA}
                                  </label>
                                  <small className="d-block">
                                    <a href="#">{REGISTRATION_SEE_PRIVACY}</a>
                                  </small>
                                </div>
                                <div className="form-group my-3">
                                  <button
                                    className="btn btn-primary-custom btn-block"
                                    onClick={(e) => onSignUp(e)}
                                  >
                                    Sign up
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </form>
                    <div className="text-center mt-5">
                      <p className="text-muted small">
                        Or use Single Sign On to sign up:
                      </p>
                      <button className="btn btn-danger">
                        <i className="fa-brands fa-google"></i>
                        <span className="d-none d-sm-inline"> Google</span>
                      </button>
                      &nbsp;
                      <button className="btn btn-dark">
                        <i className="fa-brands fa-apple"></i>
                        <span className="d-none d-sm-inline"> Apple</span>
                      </button>
                      &nbsp;
                      <button className="btn btn-primary">
                        <i className="fa-brands fa-facebook"> </i>
                        <span className="d-none d-sm-inline"> Facebook</span>
                      </button>
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
