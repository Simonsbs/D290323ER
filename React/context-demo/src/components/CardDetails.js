import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import { ThemeContext } from "../contexts/ThemeContext";

function CardDetails() {
  const { theme } = useContext(ThemeContext);
  const { selectedItem, setSelectedItem } = useContext(ListContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{selectedItem.title}</h5>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-primary">Prev</button>
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setSelectedItem(null);
                    }}
                  >
                    Back
                  </button>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default CardDetails;
