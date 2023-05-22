import { Outlet } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";
import { Hero } from "../home/Hero";
import { BackToTop } from "../BackToTop";

export const LoginLayout = () => {
  return (
    <>
      <AppHeader includeAppNavbar={false} canChangeBackgroundColor={false} />
      <main id="main">
        <Outlet />
      </main>
      <Footer includeNewsLetter={false} />
      <BackToTop />
    </>
  );
};
