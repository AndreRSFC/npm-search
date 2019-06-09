import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const Header: React.FC = () => {
  return (
    <HeaderTag>
      <Icon />
    </HeaderTag>
  );
};

const HeaderTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 275px;
  background-color: #4a90e2;
`;

export default Header;
