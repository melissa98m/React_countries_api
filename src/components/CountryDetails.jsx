import { Link } from "react-router-dom";
import { VscArrowSmallLeft } from "react-icons/vsc";
import "../styles/CountryDetails.css";
import Card from "./Card";

// const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const CountryDetails = ({ country }) => {
  const {
    flags,
    name,
    population,
    region,
    borders,
    tld,
    capital,
    currencies,
    languages,
    subregion,
    timezones,
    postalCode,
    latlng,
    coatOfArms,
    independent

  } = country;

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Card className="back-btn">
          <span className="icon">
            <VscArrowSmallLeft />
          </span>
          Back
        </Card>
      </Link>
      <div className="country">
        <div className="flag">
          <img src={flags.svg} alt={`${name.common} flag`} />
        </div>
        <div className="coatOfArms">
            <img src={coatOfArms.svg} alt={`${name.common} coatOfArms`} className="blason"/>
         </div>
        <div className="country-info">
          <h1 className="country-name">{name.common}</h1>
          <div className="stats">
            <ul>
              <li>
                <span>Nom officiel: </span>
                {name.official}
              </li>
              <li>
                  <span>Coordonnées: </span>
                   <p><em>Latitude</em>: {latlng[0]}</p>
                   <p><em>Longitude</em>: {latlng[1]}</p>
               </li>
              <li>
                <span>Population en nombre d'habitants: </span>
                {population.toLocaleString("fr-FR")}
              </li>
              <li>
                <span>Continent: </span>
                {region}
              </li>
              <li>
                <span>Region: </span>
                {subregion}
              </li>
              <li>
                <span>Capitale: </span>
                {capital ? (
                  capital.map(
                    (city, index) =>
                      `${city}${index < capital.length - 1 ? ", " : "."}`
                  )
                ) : (
                  <p>N/A</p>
                )}
              </li>
            </ul>

            <ul>
              <li>
                <span>Domaine web: </span>
                {tld.map((domain) => domain)}
              </li>
              <li>
                <span>Monnaie: </span>
                {currencies !== undefined
                  ? Object.values(currencies)[0].name
                  : "No currencies"}
              </li>
              <li>
              <span>Devise: </span>
                {currencies !== undefined
                  ? Object.values(currencies)[0].symbol
                  : "No currencies"}
              </li>
              <li>
                <span>Langues: </span>

                {`${Object.values(languages).join(", ")}`}
              </li>
              <li>
                <span>Fuseau horaire: </span>
                {timezones}
              </li>
              <li>
                <span>Format de code postal: </span>
                {postalCode !== undefined
                   ? Object.values(postalCode.format)
                : "No postal code"}
                <p><em>Regex</em>: {postalCode !== undefined
                                                      ? Object.values(postalCode.regex)
                                                   : "No regex"}</p>

              </li>
              <li>
              <span>Independant: </span>
                {independent === true ? "✅" : "❌"}
               </li>
            </ul>
          </div>

          <div className="bordering">
            <h4>Frontieres:</h4>
            <div className="border-countries">
              {borders !== undefined ? (
                borders.map((country, index) => (
                  <Card key={index}>
                    {/* {regionNames.of(country)} */}
                    <div className="country-code">{country}</div>
                  </Card>
                ))
              ) : (
                <p>{name.common} n'a pas de frontieres.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
