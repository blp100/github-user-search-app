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

  console.log(themeCtx);
  const Icon = themeCtx.isDarkTheme ? SunIcon : MoonIcon;

  return (
    <header className="flex justify-between">
      <Link className="inline-block text-logo-size text-logo" href="#">
        devfinder
      </Link>
      <button
        type="button"
        className="text-h4 flex items-center text-slate-400 hover:text-slate-600"
        onClick={toggleThemeHandler}
      >
        <span className="inline-block pr-4">{themeCtx.isDarkTheme ? "LIGHT" : "DARK"}</span>
        <Icon className="inline-block fill-current" />
      </button>
    </header>
  );
};

export default Header;
