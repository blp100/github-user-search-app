import ThemeContext from "./theme";
import { useContext } from "react";

const SearchBar = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className="h-[3.75rem] rounded-normal bg-surface shadow-normal dark:shadow-none md:h-[4.313rem]"></div>
  );
};

export default SearchBar;
