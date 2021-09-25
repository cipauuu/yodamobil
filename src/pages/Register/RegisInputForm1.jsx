import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin: auto;
`;

const RegisBtn = styled(Button)`
  margin: 12px 0;
  height: 50px;
  width: 100%;
  background: #78c2b4;
  border-radius: 10px;
  border: none;
  font-weight: 600;

  :hover {
    background: #78c2b4;
  }
`;

const Line = styled.div`
  border: 1px solid #ececf2;
  height: 1px;
  width: 40%;
`;

const Flex = styled.div`
  display: flex;
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;

  span {
    border: none;
    background: none;
  }
`;

const Wrapper = styled.div`
  height: ${(props) => props.height || "auto"};
  background: #ffffff;
  border: ${(props) => props.border || "1px solid #e4e6e8"};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 12px;
  margin-bottom: 12px;
  p {
    text-align: left;
    padding: 0.375rem 0.75rem;
    font-size: 12px;
    margin-bottom: -8px;
    color: #9a9ea7;
  }
  input {
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    background: none;
    :focus {
      border: none;
      background: none;
      box-shadow: none;
    }
  }
  span {
    background: none;
    border: none;
  }
`;

const TypoBold = styled.p`
  margin: auto 0;
  font-weight: 600;
  color: ${(props) => props.color || "#0D0A19"};
  font-size: ${(props) => props.fontSize || "14px"};
`;

const Typo = styled.p`
  margin: auto;
  color: #9a9ea7;
  font-size: ${(props) => props.fontSize || "14px"};
`;

const RegisInputForm1 = () => {
  return (
    <Container>
      <Wrapper>
        <p>Email</p>
        <InputGroup>
          <FormControl placeholder="mahendrawisnu@me.com" />
          <InputGroup.Text>
            <Img src="/assets/ic_email.svg" />
          </InputGroup.Text>
        </InputGroup>
      </Wrapper>
      <Flex>
        <Flex>
          <InputGroup.Radio /> <TypoBold>Saya sudah setuju dengan syarat dan ketentuan yodamobi</TypoBold>
        </Flex>
      </Flex>
      <RegisBtn>Daftar</RegisBtn>

      <Flex>
        <Line /> <Typo>Atau</Typo> <Line />
      </Flex>
    </Container>
  );
};

export default RegisInputForm1;
