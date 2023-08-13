function ButtonFactory(btnStyle, text) {
  switch (btnStyle) {
    case "primary":
      return <button className="btn btn-primary mb-3">{text}</button>;
    case "secondary":
      return <button className="btn btn-secondary mb-2">{text}</button>;
    case "success":
      return <button className="btn btn-success my-2">{text}</button>;
    default:
      return <button className="btn">{text}</button>;
  }
}

function dashAuthConfig(role) {
  switch (role) {
    case "admin":
      return { canEdit: true, canView: true, canDelete: true };
    case "user":
      return { canEdit: true, canView: true, canDelete: false };
    case "guest":
      return { canEdit: false, canView: true, canDelete: false };
    default:
      return { canEdit: false, canView: false, canDelete: false };
  }
}

function styleFactory(theme) {
  switch (theme) {
    case "dark":
      return { backgroundColor: "black", color: "white" };
    case "light":
      return { backgroundColor: "pink", color: "black" };
    default:
      return {};
  }
}

function FactoryDemo() {
  const auth = dashAuthConfig("admin");
  const themeStyle = styleFactory("light");

  return (
    <>
      <h1 style={themeStyle}>Factory Demo</h1>
      <ul>
        <li>{ButtonFactory("primary", "Btn 1")}</li>
        <li>{ButtonFactory("primary", "I like cake")}</li>
        <li>{ButtonFactory("primary", "Cats!!!")}</li>
        <li>{ButtonFactory("primary", "Dogs!!!")}</li>
        <li>{ButtonFactory("secondary", "Green")}</li>
        <li>{ButtonFactory("secondary", "Button")}</li>
        <li>{ButtonFactory("secondary", "another button")}</li>
        <li>{ButtonFactory("secondary", "yet another button")}</li>
        <li>{ButtonFactory("success", "last button")}</li>
      </ul>

      <ul style={themeStyle}>
        {auth.canDelete ? <li>Can Delete</li> : <></>}
        {auth.canEdit ? <li>Can Edit</li> : <></>}
        {auth.canView ? <li>Can View</li> : <></>}
      </ul>
    </>
  );
}

export default FactoryDemo;
