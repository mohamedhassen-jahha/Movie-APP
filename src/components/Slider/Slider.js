import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import Slide1 from "../../imgs/Slide1.jpg";
import Slide2 from "../../imgs/Slide2.jpg";
import Slide3 from "../../imgs/Slide3.jpg";
export default class Slider extends Component {
  render() {
    return (
      <Carousel className="SliderMain">
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="First slide" />
          <h2 className="SliderMain-Text">Best Movie Library EVER</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}
