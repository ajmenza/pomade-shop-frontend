import React, { useState, useEffect, useRef } from "react";
import "../Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Carousel() {
  const { pomades } = useGlobalContext();
  const [index, setIndex] = useState(2);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > pomades.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > pomades.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section>
      <div className="slideshow">
        {pomades.map((pomade, pomadeIndex) => {
          const { image, featured, name, _id } = pomade;
          if (featured) {
            let position = "nextSlide";

            if (pomadeIndex === index) {
              position = "activeSlide";
            }
            if (
              pomadeIndex === index - 1 ||
              (index === 0 && pomadeIndex === pomades.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div
                className={`featured-image ${position}`}
                key={_id}
                onLoad={nextSlide}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            );
          }
        })}
        <Link to={"/pomades"} className="all-pomades-btn">
          All Pomades
        </Link>
      </div>
    </section>
  );
}

export default Carousel;
