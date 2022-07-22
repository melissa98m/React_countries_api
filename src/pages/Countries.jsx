import { useEffect, useState } from "react";
import AllCountries from "../components/AllCountries";
import Filter from "../components/Filter";
import Search from "../components/Search";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/Countries.css";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (userInput) => {
    setSearchTerm(userInput);
  };

  const handleFilter = (userOption) => {
    if (userOption !== "") {
      fetchCountries(`https://restcountries.com/v3.1/region/${userOption}?order=asc`);
    } else {
      fetchCountries(`https://restcountries.com/v3.1/all?order=asc`);
    }
    return;
  };

  const fetchCountries = async (endpoint) => {
    setIsLoading(false);
    try {
      const res = await fetch(endpoint);
      setIsLoading(true);
      const data = await res.json();

      setCountries(data);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCountries("https://restcountries.com/v3.1/all?order=asc");
  }, []);

  const filteredCountries = countries.filter((country) => {
    if (searchTerm === "") {
      return country;
    } else {
      return (
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });


  return (
    <div>
      <div className="filters">
        <Search searchHandler={handleSearch} />
        <Filter filterHandler={handleFilter} />
      </div>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!isLoading && countries.length !== 0 && (
        <AllCountries countries={filteredCountries} />
      )}
    </div>
  );
};

export default Homepage;
