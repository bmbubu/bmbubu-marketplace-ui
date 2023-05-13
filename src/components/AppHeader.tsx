import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header id="header" className="header fixed-top bg-blue">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/images/logo.png" alt="" />
          <span>MYWORKPRODUCT</span>
        </Link>
      </div>
    </header>
  );
};
