import React, { useState, useEffect, useLayoutEffect } from "react";
import "../Components/Carousel.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Carousel() {
  const { pomades, featuredPomades, setFeaturedPomades, index, setIndex, indexCount, setIndexCount } = useGlobalContext();


  useLayoutEffect(() => {
    const filterArray = pomades.filter((pomade) => {
      return pomade.featured === true;
    });
    setIndex(filterArray.length - 1);
    setFeaturedPomades(filterArray);
  }, [pomades]);


  useEffect(() => {
    if (indexCount > 2) {
      let slider = setInterval(() => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > featuredPomades.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 3000);
      return () => clearInterval(slider);
    } else {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > featuredPomades.length - 1) {
          index = 0;
        }
        return index;
      });
      setIndexCount(indexCount + 1);

    }
  }, [index]);

  return (
    <section>
      <div className="slideshow">
        {featuredPomades.map((pomade, pomadeIndex) => {
          const { image, name, _id } = pomade;
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
            <div
              className={`featured-image ${position}`}
              key={_id}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
        <Link to={"/pomades"} className="all-pomades-btn">
          All Pomades
        </Link>
      </div>
    </section>
  );
}

export default Carousel;
