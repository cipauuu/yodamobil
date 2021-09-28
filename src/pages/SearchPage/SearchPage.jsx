import React from "react";
import Flex from "../../components/FlexBox/Flex";
import LeftNavSidebar from "./LeftNavSidebar";
import SearchContent from "./SearchContent";
import { Layout } from "./SearchPageStyle";

const SearchPage = () => {
  return (
    <Layout>
      <Flex>
        <LeftNavSidebar />
        <SearchContent />
      </Flex>
    </Layout>
  );
};

export default SearchPage;
