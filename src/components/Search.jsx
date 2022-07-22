import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Search.css";

const Search = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchHandler(searchInput);
  }, [searchInput, searchHandler]);

  return (
    <div className="search-bar">
      <div className="icon">
        <AiOutlineSearch />
      </div>
      <input
        type="text"
        placeholder="Rechercher un pays..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
