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
        <hr />
        <div className="row">
          <div className="col">
            <table className="table table-dark">
              <thead className="table-light">
                <tr>
                  <th>Color</th>
                  <th>Weight</th>
                  <th>Breed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Black</td>
                  <td>80Kg</td>
                  <td>Husky</td>
                </tr>
                <tr className="table-success">
                  <td>Brown</td>
                  <td className="table-warning">60Kg</td>
                  <td>Labrador</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>10Kg</td>
                  <td>Alien</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Weight</th>
                  <th>Breed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Black</td>
                  <td>80Kg</td>
                  <td>Husky</td>
                </tr>
                <tr>
                  <td>Brown</td>
                  <td>60Kg</td>
                  <td>Labrador</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>10Kg</td>
                  <td>Alien</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <h2>More stuff i like:</h2>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/200/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/240/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/137/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/125/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap3;
