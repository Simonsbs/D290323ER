function CardItem({ value }) {
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src={value.image} alt={value.title} className="card-img-top" />
        <div className="card-body">
          <h5>{value.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
