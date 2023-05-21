import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../lib/hooks/usePost";
import AuthContext from "../context/AuthProvider";
import axios from "../lib/axios/axios";
import { LOGIN_URL } from "../lib/common/api-url";
import { isEmpty } from "lodash";
import { StatusCode } from "../lib/common/error";

type Error = {
  flag: boolean;
  message: string;
};

interface LoginErrorProps {
  message: string;
  showErrorAlert: boolean;
  onAlertClose(): void;
}

const LoginError = (props: LoginErrorProps) => {
  const { message, showErrorAlert, onAlertClose } = props;

  return (
    <>
      {showErrorAlert ? (
        <div className="alert alert-danger alert-dismissible">
          <strong>
            <i className="fa-solid fa-circle-info me-2"></i>
            {` ${message}`}
          </strong>
          <button
            type="button"
            className="btn-close"
            onClick={() => onAlertClose()}
            aria-label="Close"
          ></button>
        </div>
      ) : null}
    </>
  );
};

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Error>({
    flag: false,
    message: "",
  });
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(true);

  const onSignIn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const response = await axios
          .post(LOGIN_URL, JSON.stringify({ username: email, password }), {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          })
          .catch((err) => {
            if (err?.response.status === StatusCode.Unauthorized) {
              setErrors({ flag: true, message: err?.request.response });
              setShowErrorAlert(true);
            }
          });

        if (response?.status === StatusCode.SuccessOK) {
          const accessToken = response?.data?.accessToken;
          setAuth({ user: email, accessToken });
          clearInputs();
          window.location.href = `http://localhost:3000/access=${email}`;
        }
      } catch (error) {
        //console.log(error);
      }
    } else {
      showInputsError();
    }
  };

  const validateForm = (): boolean => !isEmpty(email) || !isEmpty(password);

  const showInputsError = () => {
    if (isEmpty(email)) setHasEmailError(true);
    if (isEmpty(password)) setHasPasswordError(true);
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setHasEmailError(false);
    setHasPasswordError(false);
    setShowErrorAlert(false);
  };

  useEffect(() => {
    document.title = "Login | MyWorkProduct";
  });

  return (
    <section className="inner-page mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <div className="card">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12 col-sm-12 p-5">
                    <h3>
                      <b>Sign in</b>
                    </h3>
                    <p className="text-muted">
                      <small>
                        Doesn't have an account yet?
                        <Link to="register"> Sign Up</Link>
                      </small>
                    </p>
                    <hr />
                    {errors.flag ? (
                      <LoginError
                        message={errors.message}
                        showErrorAlert={showErrorAlert}
                        onAlertClose={() => setShowErrorAlert(false)}
                      />
                    ) : null}
                    <form className="mt-4">
                      <div className="form-group my-3">
                        <label htmlFor="email" className="small text-muted m-1">
                          <i className="fa-solid fa-envelope"></i> Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setHasEmailError(false);
                          }}
                        />
                        {hasEmailError ? (
                          <small
                            id="email-error-message"
                            className="form-text text-danger"
                          >
                            Email is Required.
                          </small>
                        ) : null}
                      </div>
                      <div className="form-group my-3">
                        <label
                          htmlFor="password"
                          className="small text-muted m-1"
                        >
                          <i className="fa-solid fa-lock"></i> Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setHasPasswordError(false);
                          }}
                        />
                        {hasPasswordError ? (
                          <small
                            id="email-error-message"
                            className="form-text text-danger"
                          >
                            Password is Required.
                          </small>
                        ) : null}
                      </div>
                      <a href="#" className="">
                        I forgot my password
                      </a>
                      <div className="form-group my-3">
                        <button
                          type="button"
                          className="btn btn-primary-custom btn-block"
                          onClick={(e) => onSignIn(e)}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="text-center mt-5">
                      <p className="text-muted small">
                        Or use Single Sign On to sign in:
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
                        <i className="fa-brands fa-facebook"></i>
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
