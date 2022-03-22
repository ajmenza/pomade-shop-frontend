import "./SinglePomade.css";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";


const SinglePomade = () => {
	const { pomades } = useGlobalContext();
	let { pomadeID } = useParams();
	const [singlePomade, setSinglePomade] = useState({});

	console.log(singlePomade);

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
						featured,
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
					return (
						<div key={_id}>
							<img className="single-pomade-image" src={image} alt="" />
							<h1>{name}</h1>
							<h2>{company}</h2>
							<p>{description}</p>
							<h3>${price.toFixed(2)}</h3>
							<h3>{hold}</h3>
							<h3>{type}</h3>
							<h3>{scent}</h3>
							<h3>{shine}</h3>
						</div>
					)
				}
			})}
		</div>
	)
}

export default SinglePomade;