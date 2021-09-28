import React, { useState } from "react";
import Flex from "../../components/FlexBox/Flex";
import Img from "../../components/Img/Img";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;

const EngineContainer = styled(Flex)`
  color: ${(props) => (props.active ? "#0D0A19" : "#9A9EA7")};
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "600" : "400")};

  img {
    cursor: pointer;
  }
`;

const engineData = [
  {
    id: 1,
    text: "3.5 V-6 cyl",
    number: 1500,
  },
  {
    id: 2,
    text: "3.7 V-6 cyl",
    number: 2900,
  },
  {
    id: 3,
    text: "4.5 V-6 cyl",
    number: 300,
  },
];

const EngineFilter = () => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(engineData[0]);

  const handleSelect = (val) => {
    setSelected(val);
  };

  return (
    <Flex width="100%" direction="column" margin="16px 0">
      <Flex width="100%" justifyContent="space-between">
        <p>Mesin</p>
        <Button onClick={() => setExpand(!expand)}>
          <Img
            src={
              expand ? "/assets/ic_minimize.svg" : "/assets/ic_plus_active.svg"
            }
          />
        </Button>
      </Flex>
      {expand &&
        engineData.map((v) => (
          <EngineContainer
            width="100%"
            key={v.id}
            justifyContent="space-between"
            active={selected.text === v.text}
          >
            <Flex width="100%">
              <Img
                src={
                  selected.text === v.text
                    ? "/assets/ic_checkbox_active.svg"
                    : "/assets/ic_checkbox_disabled.svg"
                }
                margin="auto 0"
                onClick={() => handleSelect(v)}
              />
              <p style={{ margin: "auto 8px" }}>{v.text}</p>
            </Flex>
            <p>{v.number}</p>
          </EngineContainer>
        ))}
    </Flex>
  );
};

export default EngineFilter;
