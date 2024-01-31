const Card = ({ card }) => {
  return (
    <li>
      <h1>Card</h1>
      <p>{card.title}</p>
      <p>{card.subtitle}</p>
      <p>{card.description}</p>
      {card.image && (
        <img src={card.image.url} alt={card.image.alt} width={100} />
      )}
    </li>
  );
};

export default Card;
