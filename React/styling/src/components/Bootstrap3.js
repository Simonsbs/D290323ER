function Bootstrap3() {
  return (
    <>
      <div className="container">
        <h1>My Doggie Site</h1>
        <div className="row">
          <div className="col-sm-4 col-md-8">
            <img
              src="https://picsum.photos/id/237/500/500"
              alt="This is a picture of my dog"
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-8 col-md-4">
            <h3>About my dog</h3>
            <p>
              Keelhaul loaded to the gunwalls hearties plunder Letter of Marque
              Brethren of the Coast long clothes chase knave gally. Schooner
              killick port gaff ahoy sloop mutiny nipperkin reef Barbary Coast.
              Deadlights coxswain yo-ho-ho draft salmagundi matey gunwalls black
              spot Blimey dance the hempen jig.
            </p>
            <h3>Foods my dog likes</h3>
            <ul>
              <li>Canned</li>
              <li>Sausage</li>
              <li>Bones</li>
              <li>Bonzo</li>
            </ul>
            <h3>Donate now</h3>
            <div className="row">
              <div className="col-sm-4">
                <strong>$99.99</strong>
              </div>
              <div className="col-sm-8">
                <button className="btn btn-primary float-end">
                  Donate now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap3;
