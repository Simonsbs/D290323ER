function GalleryCard({ item }) {
  return (
    <div className="card">
      <img
        className="card-card-img-top img-fluid"
        src={"https://picsum.photos/id/" + item.id + "/500/500"}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">View</button>
      </div>
    </div>
  );
}

export default GalleryCard;
