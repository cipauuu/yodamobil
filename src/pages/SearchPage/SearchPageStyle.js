import styled from "styled-components";

export const SearchBtn = styled.button`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  background-color: ${(props) => (props.active ? "#A2F3D9" : "#F5F6F7")};
  margin: ${(props) => props.margin || "0"};
  border-radius: 8px;
  border: none;
  color: ${(props) => (props.active ? "#FFFFFF" : "#9a9ea7")};
  min-width: 75px;

  :focus {
    outline: none;
  }
  p {
    font-weight: 700;
    font-size: 12px;
    margin: auto;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(153, 155, 168, 0.15);
  border-radius: 8px;
  padding: 12px;
`;

export const ImgBox = styled.div`
  background-color: #78c2b4;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  img {
    margin: 10px;
  }
`;

export const Input = styled.input`
  margin: 0 16px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Layout = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
  padding: 32px;
  border-right: 1px solid #e4e6e8;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
