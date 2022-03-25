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
	console.log(text.length);
	let paragraphs = [];
	let paragraph = '';
	for (let character = 0; character < text.length; character++) {
		if (paragraph.length < 200) {
			console.log(text[character]);
			paragraph += text[character];
		} else if (paragraph.length >= 200 && text[character] === '.') {
			
		}
	}
	console.log(paragraph);
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
					{ console.log(paragraphBreak(description)); }
					return (
						<div className="single-pomade-container" key={_id}>
							<img className="single-pomade-image" src={image} alt={name} />
							<div className="single-pomade-info">
								<div className="single-pomade-border border-bottom-none">
									<h1 className="single-pomade-name">{name}</h1>
									<div className="flex">
										<h2 className="single-pomade-company">{company}</h2>
										<p>${price.toFixed(2)}</p>
									</div>
								</div>
								<div className="single-pomade-border sp-body">
									<p className="single-pomade-description">{description}</p>
									<div className="single-pomade-grid">
										<h3>Hold: {capitalizeFirstLetter(hold)}</h3>
										<h3>Type: {capitalizeFirstLetter(type)}</h3>
										<h3>Scent: {capitalizeFirstLetter(scent)}</h3>
										<h3>Shine: {capitalizeFirstLetter(shine)}</h3>
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