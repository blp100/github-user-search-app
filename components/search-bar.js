import ThemeContext from "./theme";
import { useContext } from "react";
import SearchIcon from "../public/images/icon-search.svg";

const SearchBar = () => {
  const themeCtx = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent!");
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex h-[3.75rem] items-center rounded-normal bg-surface text-link shadow-normal dark:shadow-none md:h-[4.313rem]"
    >
      <SearchIcon className="ml-4 fill-current md:ml-8" />
      <input
        className="ml-2 flex-grow bg-inherit text-[13px]/[25px] text-secondary outline-none placeholder:text-secondary md:ml-6 md:text-[18px]/[25px]"
        type="text"
        placeholder="Search GitHub username…"
      ></input>
      <button
        className="mr-2 rounded-small bg-primary px-4 py-[0.781rem] text-[14px]/[21px] text-contrast md:mr-2.5 md:px-6 md:text-h3 md:font-bold"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
