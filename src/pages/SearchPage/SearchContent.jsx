import React from "react";
import styled from "styled-components";
import Flex from "../../components/FlexBox/Flex";
import Pagination from "./Pagination";
import SearchControl from "./SearchControl";
import SearchResult from "./SearchResult";
import Footer from "../../components/Footer/Footer";

const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
`;

const TopNav = styled(Flex)`
  width: 100%;
  margin: 16px 0;
  align-items: center;
`;

const SearchContent = () => {
  const handlePagination = (v) => {
    console.log(v);
  };

  return (
    <>
      <Flex direction="column" width="100%">
        <div style={{ padding: "24px" }}>
          <TopNav>
            <Title>Find vehicle</Title>
          </TopNav>
          <SearchControl />
          <SearchResult />
          <Pagination page={1} size={25} total={100} fetch={handlePagination} />
        </div>
        <Footer />
      </Flex>
    </>
  );
};

export default SearchContent;
