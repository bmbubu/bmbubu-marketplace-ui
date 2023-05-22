import { Link } from "react-router-dom";
import { AppNavbar } from "./AppNavbar";
import { useEffect, useState } from "react";

interface AppHeaderProps {
  includeAppNavbar: boolean;
  canChangeBackgroundColor: boolean;
}

export const AppHeader = (props: AppHeaderProps) => {
  const { includeAppNavbar, canChangeBackgroundColor } = props;
  const [showBackground, setShowBackground] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <header
      id="header"
      className={`header ${
        !canChangeBackgroundColor
          ? "fixed-top bg-blue"
          : showBackground
          ? "header-scrolled fixed-top"
          : "fixed-top"
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/images/logo.png" alt="" />
          <span>MYWORKPRODUCT</span>
        </Link>
        {includeAppNavbar ? <AppNavbar /> : null}
      </div>
    </header>
  );
};
