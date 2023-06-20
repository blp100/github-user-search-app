import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

export const ThemeContextProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem("isDarkTheme");
  };

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body").classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
      isDarkTheme && document.querySelector("body").classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  };

  const toggleThemeHandler = () => {
    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  };

  const toggleDarkClassToBody = () => {
    document.querySelector("body").classList.toggle("dark");
  };

  const setValueToLocalStorage = () => {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext