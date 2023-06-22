import ThemeContext from "./theme";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "../public/images/icon-search.svg";

const SearchBar = (props) => {
  const themeCtx = useContext(ThemeContext);

  const { onSearch, errorMessage = "", ...otherProps } = props;

  const [textValue, setValue] = useState("");

  useEffect(() => {
    if (errorMessage === null) {
      setValue("No Result!");
      // console.log(errorMessage);
    }
  }, [errorMessage]);

  return (
    <form
      method="post"
      onSubmit={onSearch}
      className="mt-9 flex h-[3.75rem] items-center rounded-[0.938rem] bg-surface text-link shadow-normal dark:shadow-none md:h-[4.313rem]"
    >
      <SearchIcon className="ml-4 fill-current md:ml-8" />
      <input
        className={`ml-2 flex-grow bg-inherit text-[13px]/[25px] outline-none placeholder:text-secondary md:ml-6 md:text-[18px]/[25px] ${
          textValue === "No Result!" ? "text-[#F74646]" : "text-secondary"
        } }`}
        type="text"
        it="searchInfo"
        name="searchInfo"
        placeholder="Search GitHub username…"
        value={textValue}
        onClick={(e) => {
          if (textValue === "No Result!") setValue("");
        }}
        onKeyDown={(e) => {
          if (textValue === "No Result!") setValue("");
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        className="mr-2 rounded-[0.625rem] bg-primary px-4 py-[0.781rem] text-[14px]/[21px] font-bold text-contrast hover:bg-[#60ABFF] md:mr-2.5 md:px-6 md:text-h3 md:font-bold"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
