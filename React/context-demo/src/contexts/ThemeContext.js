import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}
