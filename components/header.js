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
  const hoverColor = themeCtx.isDarkTheme?"hover:text-[#90A4D4]" :"hover:text-logo";
  const themeText = themeCtx.isDarkTheme ? "LIGHT" : "DARK";

  return (
    <header className="flex justify-between">
      <Link className="inline-block text-logo-size text-logo" href="#">
        devfinder
      </Link>
      <button
        type="button"
        className={"text-h4 flex items-center text-tertiary " + hoverColor}
        onClick={toggleThemeHandler}
      >
        <span className="inline-block pr-4">{themeText}</span>
        <Icon className="inline-block fill-current" />
      </button>
    </header>
  );
};

export default Header;
