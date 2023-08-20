import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function CardItem({ value }) {
  const { theme, reversedTheme } = useContext(ThemeContext);

  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src={value.image} alt={value.title} className="card-img-top" />
        <div className={`card-body bg-${reversedTheme}`}>
          <h5 className={`card-title text-${theme}`}>{value.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
