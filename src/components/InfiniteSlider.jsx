import React, { useEffect } from "react";
import "./infiniteSlider.css";

const InfiniteSlider = () => {
  useEffect(() => {
    // Clone the first logos-slide div for infinite effect
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const clone = logosSlide.cloneNode(true);
      logosSlide.parentElement.appendChild(clone);
    }
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src="/3m.svg" alt="3M Logo" />
        <img src="/barstool-store.svg" alt="Barstool Logo" />
        <img src="/budweiser.svg" alt="Budweiser Logo" />
        <img src="/buzzfeed.svg" alt="Buzzfeed Logo" />
        <img src="/forbes.svg" alt="Forbes Logo" />
        <img src="/macys.svg" alt="Macy's Logo" />
        <img src="/menshealth.svg" alt="Men's Health Logo" />
        <img src="/mrbeast.svg" alt="Mr. Beast Logo" />
      </div>
    </div>
  );
};

export default InfiniteSlider;
