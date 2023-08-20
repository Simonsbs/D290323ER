import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import { ThemeContext } from "../contexts/ThemeContext";

function CardDetails() {
  const { theme, reversedTheme } = useContext(ThemeContext);
  const { selectedItem, setSelectedItem, items } = useContext(ListContext);

  const currentIndex = items.findIndex((x) => x.id === selectedItem.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handleBack = () => {
    setSelectedItem(null);
  };

  const handlePrev = () => {
    setSelectedItem(items[currentIndex - 1]);
  };

  const handleNext = () => {
    setSelectedItem(items[currentIndex + 1]);
  };

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
            <div className={`card-body bg-${reversedTheme}`}>
              <h5 className={`card-title text-${theme}`}>
                {selectedItem.title}
              </h5>
            </div>
            <div className={`card-footer bg-${reversedTheme}`}>
              <div className="row">
                <div className="col-4">
                  {hasPrev ? (
                    <button className="btn btn-primary" onClick={handlePrev}>
                      <i className="bi bi-arrow-left"></i>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-4">
                  <button className="btn btn-secondary" onClick={handleBack}>
                    <i className="bi bi-arrow-counterclockwise"></i>
                  </button>
                </div>
                <div className="col-4">
                  {hasNext ? (
                    <button className="btn btn-primary" onClick={handleNext}>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  ) : (
                    <></>
                  )}
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
