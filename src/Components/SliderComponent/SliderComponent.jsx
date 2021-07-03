import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderComponent = () => {
  return (
    <Fragment>
      <Carousel infiniteLoop centerMode autoPlay>
        <div>
          <img src="slider1.jpg" alt="slider1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="slider2.jpg" alt="slider2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="slider3.jpg" alt="slider3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default SliderComponent;
