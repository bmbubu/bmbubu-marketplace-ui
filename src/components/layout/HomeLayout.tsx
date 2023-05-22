import { Outlet } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";
import { AppNavbar } from "../AppNavbar";
import { Hero } from "../home/Hero";
import { BackToTop } from "../BackToTop";

export const HomeLayout = () => {
  return (
    <>
      <AppHeader includeAppNavbar={true} canChangeBackgroundColor={true} />
      <Hero />
      <main id="main">
        <Outlet />
      </main>
      <Footer includeNewsLetter={true} />
      <BackToTop />
    </>
  );
};
