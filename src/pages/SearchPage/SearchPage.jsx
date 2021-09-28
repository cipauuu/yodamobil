import React from "react";
import Flex from "../../components/FlexBox/Flex";
import LeftNavSidebar from "./LeftNavSidebar";
import { Layout } from "./SearchPageStyle";

const SearchPage = () => {
  return (
    <Layout>
      <Flex>
        <LeftNavSidebar />
        rightside
      </Flex>
    </Layout>
  );
};

export default SearchPage;
