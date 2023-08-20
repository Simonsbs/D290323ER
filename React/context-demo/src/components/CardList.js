import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import CardItem from "./CardItem";
import { ThemeContext } from "../contexts/ThemeContext";

function CardList() {
  const { items } = useContext(ListContext);
  const { reversedTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1 className={`text-${reversedTheme}`}>Card List</h1>
      <div className="row">
        {items.map((x) => (
          <CardItem key={x.id} value={x} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
