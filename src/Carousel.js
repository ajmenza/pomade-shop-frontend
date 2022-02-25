import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel() {
  const [featuredPomades, setFeaturedPomades] = useState([]);
  const [index, setIndex] = useState(0);

  const url = "http://localhost:5000/api/v1/products";

  const fetchPomades = async () => {
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const { products } = await response.json();
      console.log(products);
      setFeaturedPomades(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPomades();
  }, []);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > featuredPomades.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = featuredPomades.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > featuredPomades.length - 1) {
          index = 0;
        }
        return index;
      });
    },4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section>
      <div className="slideshow">
        {featuredPomades.map((pomade, pomadeIndex) => {
          const { image, featured, name, _id } = pomade;
          if (featured) {
            let position = "nextSlide";

            if (pomadeIndex === index) {
              position = "activeSlide";
            }
            if (
              pomadeIndex === index - 1 ||
              (index === 0 && pomadeIndex === featuredPomades.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <img
                className={`featured-image ${position}`}
                key={_id}
                src={image}
                alt={name}
                onLoad={nextSlide}
              />
            );
          }
        })}
      </div>
      {/* <button className="btn-prev" onClick={prevSlide}>
        <span>
          <FaChevronLeft />
        </span>
      </button>
      <button className="btn-next" onClick={nextSlide}>
        <span>
          <FaChevronRight />
        </span>
      </button> */}
    </section>
  );
}

export default Carousel;
