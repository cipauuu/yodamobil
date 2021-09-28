import styled from "styled-components";

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
