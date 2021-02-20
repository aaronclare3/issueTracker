import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ getListFromSlider }) => {
  const [sliderLeft, setSliderLeft] = useState(true);

  const sliderChange = () => {
    setSliderLeft((sliderLeft) => !sliderLeft);
    sendSliderStatusToDashboard(!sliderLeft);
  };

  const sendSliderStatusToDashboard = (slide) => {
    getListFromSlider(slide);
  };

  return (
    <div className='container sliderContainer'>
      <div className='row d-flex justify-content-center no-gutters'>
        <div
          onClick={() => sliderChange()}
          className={`col projectSlider small ${
            sliderLeft ? "text-primary bg-light" : "text-secondary"
          }  mr-3`}>
          Projects
        </div>
        <div
          onClick={() => sliderChange()}
          className={`col issueSlider small ${
            sliderLeft ? "text-secondary" : "text-primary bg-light"
          } text-primary ml-3`}>
          Explore
        </div>
      </div>
    </div>
  );
};

export default Slider;
