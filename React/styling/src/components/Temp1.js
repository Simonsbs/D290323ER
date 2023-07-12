function Temp1(props) {
  const myStyle = {
    color: "red",
    backgroundColor: "green",
  };

  return (
    <>
      <h1 style={myStyle}>{props.children}</h1>
      <h2 style={{ color: "pink", backgroundColor: "yellow" }}>
        This is a sub header
      </h2>
    </>
  );
}

export default Temp1;
