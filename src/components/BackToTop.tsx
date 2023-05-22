import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      onClick={goToTop}
      className={`back-to-top ${
        show ? "active" : ""
      } d-flex align-items-center justify-content-center`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};
