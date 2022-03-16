import React, { useState, useEffect } from "react";
import "../Components/Carousel.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Carousel() {
  const { pomades, featuredPomades, setFeaturedPomades } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [indexCount, setIndexCount] = useState(0)
  const [renders, setRenders] = useState(0)
  const [rendersDone, setRendersDone] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  // console.log(renders);
  // console.log(index);
  console.log(indexCount);

  useEffect(() => {
    const filterArray = pomades.filter((pomade) => {
      return pomade.featured === true;
    });
    setFeaturedPomades(filterArray);
  }, [pomades]);


  useEffect(() => {
    if (indexCount > 0) {
      setStartAnimation(true);
    }
  }, [index])

  useEffect(() => {
    if (renders == 2 && !rendersDone) {
      console.log('gay');
      setIndex(featuredPomades.length - 1);
      setRendersDone(true);
    }
    if (rendersDone) {
      let slider = setInterval(() => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > featuredPomades.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 4000);
      setIndexCount(indexCount + 1);
      return () => clearInterval(slider);
    }
  }, [index, renders]);

  return (
    <section>
      <div className="slideshow">
        {featuredPomades.map((pomade, pomadeIndex) => {
        {renders < 2 && setRenders(renders + 1)}
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
              className={`featured-image ${position} ${startAnimation && 'slideshow-animation'}`}
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
