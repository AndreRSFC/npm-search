import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import "../assets/Fonts/Montserrat.css";

interface SelectedItem {
  name?: any;
  description?: any;
  homePage?: any;
  repository?: any;
  version?: any;
  license?: any;
}

interface TextProps {
  color?: string;
  size?: string;
  weight?: string;
  margin?: string;
  font?: string;
}

const SelectedItem: React.FC<SelectedItem> = props => {
  return (
    <SelectedItemTag {...props}>
      <Text font="Montserrat" size="32px" weight="700" margin="0 0 4px">
        {props.name}
      </Text>
      <Text
        font="Montserrat"
        color="#9B9B9B"
        size="16px"
        weight="700"
        margin="0 0 15px"
      >
        {props.description}
      </Text>
      <Flex flow="column" style={{ lineHeight: "1.4" }}>
        <Text>
          <Text weight="700">homepage: </Text>
          {props.homePage}
        </Text>
        <Text>
          <Text weight="700">repository: </Text>
          {props.repository}
        </Text>
        <Flex>
          <Text>
            <Text weight="700">version: </Text>
            {props.version}{" "}
          </Text>
          <Text>
            <Text weight="700"> • license: </Text>
            {props.license}
          </Text>
        </Flex>
      </Flex>
    </SelectedItemTag>
  );
};

const Text = styled.span<TextProps>`
  color: ${props => props.color || "#4A4A4A"};
  font-size: ${props => props.size || "13px"};
  font-weight: ${props => props.weight || "500"};
  font-family: ${props => props.font || "Open Sans"};
  margin: ${props => props.margin};
`;

const SelectedItemTag = styled.div<SelectedItem>`
  display: flex;
  flex-flow: column;
  max-width: 500px;
  width: 100%;
  margin: 0 20px 0 20px;
  background-color: #ffffff
  box-sizing: border-box;
`;

export default SelectedItem;
