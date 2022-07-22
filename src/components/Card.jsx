import "../styles/Card.css";

const Card = ({ children, className }) => {
  // return <div className="card">{children}</div>;
  const names = className !== undefined ? `card ${className}` : "card";

  return <div className={names}>{children}</div>;
};

export default Card;
