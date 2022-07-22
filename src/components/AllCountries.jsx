import CountryCard from "../components/CountryCard";
import "../styles/AllCountries.css";

const AllCountries = ({ countries }) => {
  return (
    <div className="country-grid">
      {countries.map(({ name, flags, population, region, capital }) => (
        <CountryCard
          key={name.common}
          flag={flags.svg}
          name={name.common}
          population={population}
          region={region}
          capital={capital}
        />
      ))}
    </div>
  );
};

export default AllCountries;
