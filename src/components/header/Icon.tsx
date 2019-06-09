import React from "react";
import styled from "styled-components";

import "../../assets/Fonts/Arazati.css";

const Icon: React.FC = () => {
  return (
    <IconTag>
      <Word>
        <span>Lib</span>Finder
      </Word>
    </IconTag>
  );
};

const IconTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  border: 5px solid #ffffff;
  border-radius: 50%;
`;

const Word = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  font-size: 36px;
  font-family: "Arazati";
  letter-spacing: 4px;
  color: #ffffff;
  background-color: #4a90e2;
  font-weight: 100;

  span {
    font-weight: 600;
  }
`;

export default Icon;
