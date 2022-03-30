import "./SinglePomade.css";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

const capitalizeFirstLetter = (string) => {
  let newString = string.charAt(0).toUpperCase();
  newString = newString + string.slice(1);
  return newString;
}

const paragraphBreak = (text) => {
  let paragraphs = [];
  let paragraph = '';
  for (let character = 0; character < text.length; character++) {
    if (paragraph.length < 150) {
      paragraph += text[character];
    } else if (paragraph.length >= 150 && text[character] !== '.') {
      paragraph += text[character];
    } else if (text[character] === '.' || character === text.length - 1) {
      paragraph += text[character];
      paragraphs.push(paragraph);
      paragraph = '';
    }
  }
  return paragraphs;
}

const SinglePomade = () => {
  const { pomades } = useGlobalContext();
  let { pomadeID } = useParams();
  const [singlePomade, setSinglePomade] = useState({});

  useEffect(() => {
    pomades.forEach((pomade) => {
      const { _id } = pomade;
      if (pomadeID === _id) {
        setSinglePomade(pomade);
      }
    });
  }, [singlePomade])


  // if (<NoMatch />) {

  // }

  return (
    <div className="single-pomade-page">
      {pomades.map((pomade) => {
        const { _id } = pomade;
        if (pomadeID === _id) {
          const {
            image,
            name,
            price,
            category,
            company,
            hold,
            type,
            scent,
            shine,
            _id,
            description
          } = pomade;
          let paragraphs = paragraphBreak(description);
          return (
            <div className="single-pomade-container" key={_id}>
              <img className="single-pomade-image" src={image} alt={name} />
              <div className="single-pomade-info">
                <div className="single-pomade-border border-bottom-none">
                  <h1 className="single-pomade-name">{name}</h1>
                  <div className="sp-flex">
                    <h2 className="single-pomade-company">{company}</h2>
                    <p className="single-pomade-price">${price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="single-pomade-border sp-body">
                  <div className="single-pomade-description">
                    {paragraphs.map((paragraph, index) => {
                      return <p className="single-pomade-paragraph" key={index}>{paragraph}</p>
                    })}
                  </div>
                  <div className="single-pomade-grid">
                    <div className="sp-grid-item">
                      <span>Hold:</span>
                      <span>{capitalizeFirstLetter(hold)}</span>
                    </div>
                    <div className="sp-grid-item">
                      <span>Type:</span>
                      <span>{capitalizeFirstLetter(type)}</span>
                    </div>
                    <div className="sp-grid-item">
                      <span>Scent:</span>
                      <span>{capitalizeFirstLetter(scent)}</span>
                    </div>
                    <div className="sp-grid-item">
                      <span>Shine:</span>
                      <span>{capitalizeFirstLetter(shine)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default SinglePomade;