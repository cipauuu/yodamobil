import React from "react";
import styled from "styled-components";
import Flex from "../../components/FlexBox/Flex";
import SearchControl from "./SearchControl";

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
  return (
    <Flex direction="column" width="100%" padding="24px">
      <TopNav>
        <Title>Find vehicle</Title>
      </TopNav>
      <SearchControl />
    </Flex>
  );
};

export default SearchContent;
