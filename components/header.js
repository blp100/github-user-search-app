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

  return (
    <header className="flex justify-between">
      <Link className="inline-block text-logo-size text-logo" href="#">
        devfinder
      </Link>
      <button
        type="button"
        className="text-h4 text-slate-400 hover:text-slate-600"
        onClick={toggleThemeHandler}
      >
        <span className="inline-block pr-4 dark:hidden">DARK</span>
        <MoonIcon className="inline-block fill-current dark:hidden" />
        <span className="hidden pr-4 dark:inline-block">LIGHT</span>
        <SunIcon className="hidden fill-current dark:inline-block" />
      </button>
    </header>
  );
};

export default Header;
