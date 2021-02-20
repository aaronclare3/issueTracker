import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [sliderLeft, setSliderLeft] = useState(true);

  return (
    <div className='container sliderContainer'>
      <div className='row d-flex justify-content-center no-gutters'>
        <div
          onClick={() => setSliderLeft((sliderLeft) => !sliderLeft)}
          className={`col projectSlider small ${
            sliderLeft ? "text-primary bg-light" : "text-secondary"
          }  mr-3`}>
          Projects
        </div>
        <div
          onClick={() => setSliderLeft((sliderLeft) => !sliderLeft)}
          className={`col issueSlider small ${
            sliderLeft ? "text-secondary" : "text-primary bg-light"
          } text-primary ml-3`}>
          Issues
        </div>
      </div>
    </div>
  );
};

export default Slider;
