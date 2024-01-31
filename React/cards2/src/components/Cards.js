import { useEffect, useState } from "react";
import { getAllCards } from "../services/cardsService";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function inner() {
      const response = await getAllCards();
      console.log(response);
      setCards(response.message);
    }
    inner();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      <ul>
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </>
  );
};

export default Cards;
