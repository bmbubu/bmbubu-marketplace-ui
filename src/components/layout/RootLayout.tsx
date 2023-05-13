import { Outlet } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";

export const RootLayout = () => {
  return (
    <>
      <AppHeader />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};
