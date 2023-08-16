import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  let themeContrast = theme;
  switch (theme) {
    case "light":
      themeContrast = "dark";
      break;
    case "dark":
      themeContrast = "light";
      break;
    default:
      themeContrast = theme;
  }

  return (
    <footer className={`footer bg-${theme} text-${themeContrast}`}>
      <div className="container text-center py-2">
        <span>Some Footer Text - &copy; All rights reserved to ME!</span>
        <br />
        <span>The current theme is: {theme}</span>
      </div>
    </footer>
  );
}

export default Footer;
