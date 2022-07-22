import { useRef } from "react";
import "../styles/Filter.css";

const Filter = ({ filterHandler }) => {
  const selectRef = useRef();

  const filterRegion = () => {
    filterHandler(selectRef.current.value);
  };

  return (
    <div className="region-filter">
      <select name="region-filter" ref={selectRef} onChange={filterRegion}>
        <option value="">Filtrer par continents</option>
        <option value="africa">Afrique</option>
        <option value="america">Amerique</option>
        <option value="asia">Asie</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceanie</option>
      </select>
    </div>
  );
};

export default Filter;
