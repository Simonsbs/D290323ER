import "./Temp2.css";

function Temp2({ children }) {
  return (
    <>
      <div className="tempClass">{children}</div>
      <div className="tempClass2">{children}</div>
    </>
  );
}

export default Temp2;
