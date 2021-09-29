import React from "react";
import Img from "../../components/Img/Img";
import logo from "../../logo.svg";
import { Container } from "./SearchPageStyle";
import styled from "styled-components";

const Anchor = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) => (props.active ? "#F5F6F7" : "#FFFFFF")};
  text-decoration: none;
  border-radius: 10px;
  height: 56px;
  padding: 24px;
  margin: 8px 0;
  cursor: pointer;

  img {
    filter: ${(props) =>
      props.active
        ? "invert(90%) sepia(16%) saturate(699%) hue-rotate(99deg) brightness(100%) contrast(91%)"
        : "none"};
  }
`;

const Title = styled.p`
  font-size: 14px;
  color: #9a9ea7;
  margin: 0 24px;
`;

const Typo = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0 24px;
  color: ${(props) => (props.active ? "#0d0a19" : "#9A9EA7")};
`;
const LeftNavSidebar = () => {
  return (
    <Container>
      <Img src={logo} height="40px" width="190px" />
      <Anchor href="/search">
        <Img src="/assets/ic_dashboard.svg" />
        <Typo>Dashboard</Typo>
      </Anchor>
      <Title>Auction</Title>
      <Anchor href="/search">
        <Img src="/assets/ic_auction.svg" />
        <Typo>Lelang</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_calendar.svg" />
        <Typo>Calendar</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_active_offer.svg" />
        <Typo>Tawaran Aktif</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_saved.svg" />
        <Typo>Disimpan</Typo>
      </Anchor>
      <Title>Pencarian mobil</Title>
      <Anchor href="/search" active>
        <Img src="/assets/ic_search.svg" />
        <Typo>Cari Mobil</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_listings.svg" />
        <Typo>Listings</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_book_service.svg" />
        <Typo>Book Service</Typo>
      </Anchor>
      <Anchor href="/search">
        <Img src="/assets/ic_helpdesk.svg" />
        <Typo>Pusat Bantuan</Typo>
      </Anchor>
    </Container>
  );
};

export default LeftNavSidebar;
