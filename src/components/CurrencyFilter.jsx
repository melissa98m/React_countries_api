import { useRef } from "react";
import "../styles/CurrencyFilter.css";

const CurrencyFilter = ({ currencyHandler }) => {
  const selectRef = useRef();

  const filterCurrency = () => {
    currencyHandler(selectRef.current.value);
  };

  return (
    <div className="currency-filter">
      <select name="currency-filter" ref={selectRef} onChange={filterCurrency}>
        <option value="">Filtrer par monnaie</option>
        <option value="euro">€ Euro</option>
        <option value="dollar">$ Dollar</option>
        <option value="dinar">Dinar</option>
        <option value="franc">F Franc</option>
        <option value="pound">£ Pound</option>
        <option value="yuan">元 Yuan</option>
        <option value="yen">¥ Yen</option>
      </select>
    </div>
  );
};

export default CurrencyFilter;
