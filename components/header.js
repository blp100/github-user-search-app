import ThemeContext from "./theme";
import { useContext } from "react";
import Link from "next/link";
import SunIcon from "../public/images/icon-sun.svg";
import MoonIcon from "../public/images/icon-moon.svg";

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

  const Icon = themeCtx.isDarkTheme ? SunIcon : MoonIcon;

  return (
    <header className="flex justify-between">
      <Link className="inline-block text-logo-size text-logo" href="#">
        devfinder
      </Link>
      <button
        type="button"
        className={`text-h4 flex items-center text-tertiary hover:${themeCtx.isDarkTheme?"text-[#90A4D4]" :"text-logo"}`}
        onClick={toggleThemeHandler}
      >
        <span className="inline-block pr-4">{themeCtx.isDarkTheme ? "LIGHT" : "DARK"}</span>
        <Icon className="inline-block fill-current" />
      </button>
    </header>
  );
};

export default Header;
