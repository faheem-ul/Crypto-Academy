// providers/Providers.tsx
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

interface PropTypes {
  children: React.ReactNode;
}

const Providers: React.FC<PropTypes> = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      delay: 200,  
    });
  }, []);

  return <>{children}</>; // Wrap in a fragment
};

export default Providers;
