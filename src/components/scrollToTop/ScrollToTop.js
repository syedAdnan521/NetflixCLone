import React from "react";
import "./ScrollToTop.css";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setisVisible] = useState(false);

  const toggleVisiblity = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

   useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);

    return () => {
      window.removeEventListener("scroll,", toggleVisiblity);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className="fas fa-arrow-circle-up fa-3x"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
