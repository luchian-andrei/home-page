import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [index, setIndex] = useState(1);

  const slides = [
    { src: "./images/img1.jpg", alt: "first" },
    { src: "./images/img2.jpg", alt: "second" },
    { src: "./images/img3.jpg", alt: "third" },
  ];

  function handleCickLeft() {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  }

  function handleClickRight() {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleClickRight();
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="slideshow-container">
      <div className="prev-next">
        <FontAwesomeIcon
          icon={faCircleLeft}
          className="icon prev"
          onClick={handleCickLeft}
        />
      </div>

      <div id="home" className="img-container">
        <img src={slides[index].src} alt="first" />
      </div>

      <div className="prev-next">
        <FontAwesomeIcon
          icon={faCircleRight}
          className="icon next"
          onClick={handleClickRight}
        />
      </div>

      <div className="slider-nav">
        <FontAwesomeIcon icon={faCircle} onClick={() => setIndex(0)} />
        <FontAwesomeIcon icon={faCircle} onClick={() => setIndex(1)} />
        <FontAwesomeIcon icon={faCircle} onClick={() => setIndex(2)} />
      </div>
    </div>
  );
}
