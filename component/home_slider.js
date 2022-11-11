import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useRef } from 'react';function SamplePrevArrow(props) {
import Testi from "../Images/test-1.jpg";
import Image from "next/image";

var settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div class="next-arrows">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.47656 0.4375L8.0625 6.375C8.21875 6.57031 8.33594 6.80469 8.33594 7C8.33594 7.23438 8.21875 7.46875 8.0625 7.66406L2.47656 13.6016C2.125 13.9922 1.53906 13.9922 1.14844 13.6406C0.757812 13.2891 0.757812 12.7031 1.10938 12.3125L6.10938 7L1.10938 1.72656C0.757812 1.33594 0.757812 0.75 1.14844 0.398438C1.53906 0.046875 2.125 0.046875 2.47656 0.4375Z"
            fill="#211E1C"
          />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="prev-arrows">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.48438 13.6016L0.898438 7.66406C0.742188 7.46875 0.625 7.23438 0.625 7C0.625 6.80469 0.742188 6.57031 0.898438 6.375L6.48438 0.4375C6.83594 0.046875 7.42188 0.046875 7.8125 0.398438C8.20312 0.75 8.20312 1.33594 7.85156 1.72656L2.8125 7.03906L7.85156 12.3125C8.20312 12.7031 8.20312 13.2891 7.8125 13.6406C7.42188 13.9922 6.83594 13.9922 6.48438 13.6016Z"
            fill="#211E1C"
          />
        </svg>
      </div>
    </div>
  );
}

const slider_home = () => {
  return (
    <>
      <div
        className="testi-slider-main wow animate__fadeInUp"
        data-wow-delay="0s"
        data-wow-duration="2s"
      >
        <Slider {...settings}>
          <div>
            <div className="testi-item">
              <div className="jon-box">
                <div className="test-head">
                  <div className="text-hh">
                    <h4>Markus B.</h4>
                    <p>Kunde</p>
                  </div>
                </div>
                <div className="jon-text">
                Danke für die schnelle und unkomplizierte Hilfe
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testi-item">
              <div className="jon-box">
                <div className="test-head">
                  <div className="text-hh">
                    <h4>Laura H.</h4>
                    <p>Kunde</p>
                  </div>
                </div>
                <div className="jon-text">
                  Sehr gute Kommunikation vom Start weg. So habe ich genau das
                  bekommen was ich gebraucht habe.
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default slider_home;
