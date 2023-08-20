import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import CardItem from "./CardItem";
import { ThemeContext } from "../contexts/ThemeContext";
import CardDetails from "./CardDetails";

function CardList() {
  const { items, selectedItem } = useContext(ListContext);
  const { reversedTheme } = useContext(ThemeContext);

  if (selectedItem) {
    return (
      <>
        <h2 className={`text-${reversedTheme}`}>Selected item:</h2>
        <CardDetails />
      </>
    );
  }

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
