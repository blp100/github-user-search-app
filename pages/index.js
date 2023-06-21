import { useState } from "react";
import Layout from "../components/layout";
import SearchBar from "../components/search-bar";
import UserSummary from "../components/user-summary";

const Page = () => {
  const [searchName, setSearchName] = useState("octocat");
  const [searchError, setSearchError] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName(e.target.searchInfo.value);
    setSearchError("");
  };

  const hanleSearchError = () => {
    setSearchError(null);
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} errorMessage={searchError} />
      <UserSummary searchName={searchName} onError={hanleSearchError} />
    </Layout>
  );
};

export default Page;
