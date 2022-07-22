import CountryCard from "../components/CountryCard";
import "../styles/AllCountries.css";

const AllCountries = ({ countries }) => {
  return (
    <div className="country-grid">
      {countries.map(({ name, flags, population, region, capital , currencies}) => (
        <CountryCard
          key={name.common}
          flag={flags.svg}
          name={name.common}
          population={population}
          region={region}
          capital={capital}
          currencies= {currencies !== undefined
                                       ? Object.values(currencies)[0].name
                                       : "No currencies"}
        />
      ))}
    </div>
  );
};

export default AllCountries;
