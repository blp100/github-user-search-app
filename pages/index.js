import Layout from "../components/layout";
import SearchBar from "../components/search-bar";
import UserSummary from "../components/user-summary";

const Page = () => {

  const handleSearch = (e)=>{

  }

  return (
    <Layout>
      <SearchBar />
      <UserSummary />
    </Layout>
  );
};

export default Page;
