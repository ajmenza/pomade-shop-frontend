import { useGlobalContext } from "../context";
import Header from "../Header/Header";
import "./Pomades.css";

const Pomades = () => {
  const { pomades } = useGlobalContext();
  return (
    <>
      <Header />
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
                <img className="pomade-image" src={image} alt={name} />
                <h2>{name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pomades;
