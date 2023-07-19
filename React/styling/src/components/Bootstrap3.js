function Bootstrap3() {
  return (
    <>
      <div className="container">
        <h1 className="p-2">My Doggie Site</h1>
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
            <p className="border border-warning p-2">
              Keelhaul loaded to the gunwalls hearties plunder Letter of Marque
              Brethren of the Coast long clothes chase knave gally. Schooner
              killick port gaff ahoy sloop mutiny nipperkin reef Barbary Coast.
              Deadlights coxswain yo-ho-ho draft salmagundi matey gunwalls black
              spot Blimey dance the hempen jig.
            </p>

            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: "75%" }}
              ></div>
            </div>

            <div className="progress-stacked mb-3">
              <div
                className="progress"
                role="progressbar"
                aria-label="Segment one"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "15%" }}
              >
                <div className="progress-bar"></div>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Segment two"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "30%" }}
              >
                <div className="progress-bar bg-success"></div>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Segment three"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "20%" }}
              >
                <div className="progress-bar bg-info"></div>
              </div>
            </div>

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
        <div className="row">
          <div className="col">
            <div className="p-4 mb-3 mt-4 bg-light rounded border border-warning">
              <h4>Dog Tip of the day</h4>
              <p className="mb-0 fst-italic">Dogs are better than cats</p>
            </div>
          </div>
        </div>
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
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Weight</th>
                    <th>Breed</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
                    <th>STUM</th>
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
        </div>

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
