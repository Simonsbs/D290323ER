function Bootstrap2() {
  return (
    <>
      <h1>More bootstrap demos</h1>
      <div className="container">
        <div className="row">
          <div className="col">Row 1 Col 1</div>
          <div className="col">Row 1 Col 2</div>
        </div>
        <div className="row">
          <div className="col-4">Row 2 Col 1</div>
          <div className="col-4">Row 2 Col 2</div>
          <div className="col-4">Row 2 Col 3</div>
        </div>
        <div className="row">
          <div className="col col-sm-8 col-md-3 col-lg-5">Row 3 Col 1</div>
          <div className="col col-sm-2 col-md-3 col-lg-2">Row 3 Col 2</div>
          <div className="col col-sm-2 col-md-6 col-lg-5">Row 3 Col 3</div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap2;
