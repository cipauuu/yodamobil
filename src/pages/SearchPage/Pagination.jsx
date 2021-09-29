import React from "react";
import styled from "styled-components";
import Flex from "../../components/FlexBox/Flex";
import Img from "../../components/Img/Img";

const Icon = styled(Img)`
  height: 27px;
  :hover {
    cursor: pointer;
  }
`;

const Page = styled.div`
  display: grid;
  place-items: center;
  border-radius: 6px;
  margin: 12px 1px;
  min-width: 24px;
  max-width: max-content;
  height: 24px;
  cursor: pointer;
  font-weight: 700;
  color: ${({ active }) => (active ? "#fff" : "#0D0A19")}}
  background: ${({ active }) => (active ? "#78C2B4" : "#fff")}};

`;

const Pagination = ({ page, size, total, fetch }) => {
  const totalPage = Math.ceil(total / size || 1);
  const pages = Array.from(Array(totalPage).keys())
    .map((i) => 1 + i)
    .slice(0, -1);
  const shownPages =
    page + 2 >= totalPage ? pages.slice(-3) : pages.slice(page - 1, page + 2);

  const handleNext = () => {
    page < totalPage && fetch && fetch(page + 1);
  };

  const handlePrev = () => {
    page > 1 && fetch && fetch(page - 1);
  };

  const handleClick = (page) => {
    fetch && fetch(page);
  };

  return (
    <Flex alignItems="center" margin="16px 0">
      <Flex alignItems="center">
        {page > 1 && (
          <Icon
            onClick={handlePrev}
            src="/assets/ic_previous_page.svg"
            alt="previous button icon"
          />
        )}
        {shownPages.map((val) => (
          <Page
            key={val}
            active={page === val}
            onClick={() => handleClick(val)}
          >
            {val}
          </Page>
        ))}

        {totalPage > 1 && (
          <Page
            active={page === totalPage}
            onClick={() => handleClick(totalPage)}
          >
            {totalPage}
          </Page>
        )}
        <Icon
          onClick={handleNext}
          src="/assets/ic_next_page.svg"
          alt="next button icon"
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
