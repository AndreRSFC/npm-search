import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import "../assets/Fonts/Montserrat.css";

interface FooterProps {
  text?: string;
}

const Footer: React.FC<FooterProps> = props => {
  return (
    <FooterTag>
      <Flex justify="center">
        <a href="https://www.studiosol.com.br/">{props.text}</a>
      </Flex>
    </FooterTag>
  );
};

const FooterTag = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  height: 50px;
  background-color: #f0f0f0;

  a {
    color: #9b9b9b;
    font-size: 15px;
    font-family: Montserrat;
    text-decoration: none;
  }
`;

export default Footer;
