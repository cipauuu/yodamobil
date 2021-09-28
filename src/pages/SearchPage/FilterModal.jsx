import React from "react";
import Img from "../../components/Img/Img";
import EngineFilter from "./EngineFilter";
import { Container } from "./SearchPageStyle";
import styled from "styled-components";

const FilterContainer = styled(Container)`
  background: #ffffff;
  box-shadow: 0px -15px 20px rgba(13, 10, 25, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  animation: ${(props) => (props.isVisible ? "pop-up 0.15s" : "pop-off 2s")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  @keyframes pop-up {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    50% {
      transform: translateX(0.5);
    }
    70% {
      transform: translateX(0.75);
    }
    100% {
      transform: translateX(1);
      opacity: 1;
    }
  }
`;

const CloseBtn = styled.button`
  display: flex;
  background: none;
  padding: 0;
  align-items: center;
  border: none;
  :focus {
    outline: none;
  }

  p {
    font-weight: 700;
    color: #9a9ea7;
    margin: auto 0;
    font-size: 14px;
  }
`;

const ApplyFilter = styled.button`
  background: #78c2b4;
  padding: 14px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 600;
  color: #ffffff;
  margin: 16px 0;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;
const FilterModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <FilterContainer isVisible={isOpen}>
      <CloseBtn onClick={closeModal}>
        <Img src="/assets/ic_filter.svg" margin="0 12px 0 0" />
        <p>Filter by</p>
      </CloseBtn>
      <EngineFilter />
      <ApplyFilter>Aplikasikan Filter</ApplyFilter>
    </FilterContainer>
  );
};

export default FilterModal;
