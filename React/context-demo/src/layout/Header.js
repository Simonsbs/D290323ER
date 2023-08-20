import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme, reversedTheme, toggleTheme } = useContext(ThemeContext);

  //const textColor = theme === "dark" ? "text-light" : "text-dark";

  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <div className={`navbar-brand text-${reversedTheme}`}>My App</div>

        {/* <button onClick={toggleTheme}>toggle</button> */}

        <div className="form-check form-switch">
          <input
            type="checkbox"
            id="cbToggleTheme"
            className="form-check-input"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <label
            className={`form-check-label text-${reversedTheme} text-capitalize`}
            htmlFor="cbToggleTheme"
          >
            {theme}
            <i
              className={`bi bi-${
                theme === "dark" ? "moon-fill" : "brightness-high-fill"
              } ms-2`}
            ></i>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
