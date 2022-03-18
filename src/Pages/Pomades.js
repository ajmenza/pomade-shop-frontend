import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Pomades.css";

const Pomades = () => {

  const { pomades } = useGlobalContext();
  return (
    <div className="page-container">
      <div className="pomades-container">
        <div className="pomades">
          {pomades.map((pomade) => {
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
            } = pomade;
            return (
              <div className="single-pomade" key={_id}>
                <Link className="product-image-link" to={`/pomades/${_id}`}><img className="product-image" src={image} alt={name} /></Link>
                <div className="product-text">
                  <h3 className="product-company">{company}</h3>
                  <h2 className="product-name">{name}</h2>
                  <p className="product-price">${price.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pomades;
