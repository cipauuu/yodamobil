import React, { useState } from "react";
import Flex from "../../components/FlexBox/Flex";
import Img from "../../components/Img/Img";
import { SearchContainer, ImgBox, Input, SearchBtn } from "./SearchPageStyle";
import { buttonData } from "./SearchHelper";
import SearchButton from "./SearchButton";
import FilterModal from "./FilterModal";

const SearchControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Flex width="100%" direction="column">
        <SearchContainer>
          <ImgBox>
            <Img src="/assets/ic_search_light.svg" height="18px" width="18px" />
          </ImgBox>
          <Input placeholder="Find vehicle..." />
        </SearchContainer>
        <Flex width="100%" justifyContent="space-between" margin="16px 0">
          <Flex>
            {buttonData.map((v) => (
              <SearchButton key={v.id} data={v} />
            ))}
          </Flex>
          <SearchBtn
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Img src="/assets/ic_filter.svg" margin="0 12px 0 0" />
            <p>Filter</p>
          </SearchBtn>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchControl;
