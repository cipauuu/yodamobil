import React, { useState } from "react";
import { SearchBtn } from "./SearchPageStyle";

const SearchButton = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSearch = () => {
    setIsActive(!isActive);
    //nanti disini manggil api
  };
  return (
    <SearchBtn margin="0 0 0 4px" active={isActive} onClick={handleSearch}>
      <p>{data.text}</p>
    </SearchBtn>
  );
};

export default SearchButton;
