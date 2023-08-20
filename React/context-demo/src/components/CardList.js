import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import CardItem from "./CardItem";

function CardList() {
  const { items } = useContext(ListContext);

  return (
    <div className="container">
      <h1>Card List</h1>
      <div className="row">
        {items.map((x) => (
          <CardItem key={x.id} value={x} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
