import { useEffect } from "react";
import { Features } from "../components/home/Features";
import { Hero } from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";
import { Pricing } from "../components/home/Pricing";
import { Testimonial } from "../components/home/Testimonial";

export const Home = () => {
  useEffect(() => {
    document.title = "Home | MyWorkProduct";
  });
  return (
    <>
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <Features />
    </>
  );
};
