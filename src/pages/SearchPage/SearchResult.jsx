import React from "react";
import Img from "../../components/Img/Img";
import Flex from "../../components/FlexBox/Flex";
import styled from "styled-components";

const Text = styled.p`
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  margin: 0;
  color: ${(props) => (props.bold ? "#0D0A19" : "#9A9EA7")};
`;

const TableContainer = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid #ede8e9;
`;

const SearchResult = () => {
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th></th>
          <th>Merek</th>
          <th>Model</th>
          <th>Tahun</th>
          <th>Dealer</th>
          <th>Harga</th>
          <th></th>
        </tr>
      </TableHead>
      <tbody>
        {[
          ...Array(5)
            .fill()
            .map((v, i) => (
              <tr key={i}>
                <td>
                  <Img
                    src="/assets/ic_checkbox_active.svg"
                    width="112px"
                    height="74px"
                  />
                </td>
                <td>
                  <Text bold>Daihatsu</Text>
                  <Text>Minibus</Text>
                </td>
                <td>
                  <Text bold>Gran Max</Text>
                  <Text>Off-road package</Text>
                </td>
                <td>
                  <Text bold>2009</Text>
                </td>
                <td>
                  <Flex alignItems="center">
                    <Img
                      src="/assets/ic_checkbox_active.svg"
                      width="40px"
                      height="40px"
                      margin="0 12px 0 0"
                    />
                    <div>
                      <Text bold>Daihatsu Cikajang</Text>
                      <Text>Jl Kembangan Tujuh Rupa No. 112</Text>
                    </div>
                  </Flex>
                </td>
                <td>
                  <Text bold>Rp 210 jt</Text>
                </td>
              </tr>
            )),
        ]}
      </tbody>
    </TableContainer>
  );
};

export default SearchResult;
