import React, { useState } from "react";
import pomades from "./pomades";


function Carousel() {
  return <section>
    <div className="slideshow">
      {pomades.map((pomade) => {
        const {image, featured, name, id} = pomade;
        console.log(image);
        if (featured) {
          return <img className="featured-image" key={id} src={image} alt={name} />
        } 
      })}
    </div>
  </section>;
}

export default Carousel;