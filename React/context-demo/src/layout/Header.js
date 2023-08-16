import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <div
          className={`navbar-brand text-${theme === "dark" ? "light" : "dark"}`}
        >
          My App
        </div>
      </div>
    </nav>
  );
}

export default Header;
