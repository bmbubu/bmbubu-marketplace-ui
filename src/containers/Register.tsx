import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RegisterFormDto,
  RegisterRequestDto,
} from "../lib/data-transfer-object/register.dto";
import {
  REGISTRATION_SEE_PRIVACY,
  REGISTRATION_TERMS,
  REGISTRATION_USE_OF_DATA,
} from "../lib/common/tms";
import { REGISTER_URL } from "../lib/common/api-url";
import axios from "axios";
import { RegistrationError, StatusCode } from "../lib/common/error";
import { useFormik } from "formik";
import {
  convertFormDataToRequestDto,
  registerFormData,
} from "../lib/helper/registration.helper";
import * as Yup from "yup";

export const Register = () => {
  const initialValues: RegisterFormDto = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    contactNo: "",
    zipCode: "",
    isAgreeToTerms: false,
    isAgreeToUseData: false,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string().required(
        RegistrationError.FIRST_NAME_IS_REQUIRED
      ),
      lastName: Yup.string().required(RegistrationError.LAST_NAME_IS_REQUIRED),
      email: Yup.string().required(RegistrationError.EMAIL_IS_REQUIRED),
      password: Yup.string().required(RegistrationError.PASSWORD_IS_REQUIRED),
      confirmPassword: Yup.string().required(
        RegistrationError.CONFIRM_PASSWORD_IS_REQUIRED
      ),
    }),
    onSubmit: async (values) => {
      const requestDto = convertFormDataToRequestDto(values);
      const response = await registerFormData(requestDto);
      if (response === StatusCode.Created) navigate("/registration-success");
    },
  });
  const navigate = useNavigate();

  const onSignUp = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
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
                        <Link to="/login"> Sign In</Link>
                      </small>
                    </p>
                    <hr />
                    <form className="mt-0" onSubmit={formik.handleSubmit}>
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
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <small
                                    id="first_name_message"
                                    className="form-text text-danger"
                                  >
                                    {formik.errors.firstName &&
                                      formik.touched.firstName &&
                                      formik.errors.firstName}
                                  </small>
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <small
                                    id="first_name_message"
                                    className="form-text text-danger"
                                  >
                                    {formik.errors.lastName &&
                                      formik.touched.lastName &&
                                      formik.errors.lastName}
                                  </small>
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="contactNo"
                                    name="contactNo"
                                    placeholder="+1 5589 55488 55"
                                    value={formik.values.contactNo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="United States with Zip Code"
                                    value={formik.values.zipCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                    name="email"
                                    placeholder="email@example.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <small
                                    id="first_name_message"
                                    className="form-text text-danger"
                                  >
                                    {formik.errors.email &&
                                      formik.touched.email &&
                                      formik.errors.email}
                                  </small>
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <small
                                    id="first_name_message"
                                    className="form-text text-danger"
                                  >
                                    {formik.errors.password &&
                                      formik.touched.password &&
                                      formik.errors.password}
                                  </small>
                                </div>
                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <small
                                    id="first_name_message"
                                    className="form-text text-danger"
                                  >
                                    {formik.errors.confirmPassword &&
                                      formik.touched.confirmPassword &&
                                      formik.errors.confirmPassword}
                                  </small>
                                </div>

                                <div className="form-group mx-1 my-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isAgreeToTerms"
                                    name="isAgreeToTerms"
                                    checked={formik.values.isAgreeToTerms}
                                    onChange={formik.handleChange}
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
                                    id="isAgreeToUseData"
                                    checked={formik.values.isAgreeToUseData}
                                    onChange={formik.handleChange}
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
                                    type="submit"
                                    className="btn btn-primary-custom btn-block"
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
