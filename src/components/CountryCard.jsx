import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ flag, name, population, region, capital , currencies}) => {
  return (
    <Card>
      <div className="country-card">
        <div className="flag">
          <Link to={`/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <img src={flag} alt={`${name} flag`} />
          </Link>
        </div>
        <div className="country-info">
          <h3>{name}</h3>
          <ul>
            <li>
              <span>Population: </span>
              {population.toLocaleString("fr-FR")}
            </li>
            <li>
              <span>Continent: </span>
              {region}
            </li>
            <li>
              <span>Capitale: </span>
              {capital}
            </li>
            <li>
            <span>Monnaie: </span>
              {currencies}
            </li>
          </ul>
            <Link to={`/${name.toLowerCase().replace(/\s+/g, "-")}`}>
              <button className="btn">Voir plus de détails</button>
           </Link>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
