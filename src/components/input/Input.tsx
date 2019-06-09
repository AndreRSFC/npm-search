import React from "react";
import styled from "styled-components";

import Flex from "../Flex";
const Search = require("../../assets/Icons/Search.svg");

interface InputProps {
  placeholder?: string;
  onChange?: any;
  children?: JSX.Element[] | JSX.Element;
}

const Input: React.FC<InputProps> = props => {
  return (
    <Flex align="center" justify="center">
      <InputTag>
        <input {...props} />
        <img
          alt="Imagem de busca do input"
          title="Digite para buscar"
          src={Search}
        />
      </InputTag>
    </Flex>
  );
};

const InputTag = styled.div`
  position: relative;
  top: -25px;
  display flex;
  justify-content: space-between;
  width: 100%;
  max-width:500px;
  padding: 10px 10px;
  margin: 0 20px 0 20px;
  box-sizing: border-box;
  
  outline:none;
  border:none;
  border-radius 10px;
  box-shadow: 0 1.5px 2.5px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;

  input{
    border: none;
    font-family: Open Sans;
    font-size:20px;
    color:#4A4A4A;
    width:100%;
    outline: none;
    text-overflow: ellipsis;
  }
  
`;

export default Input;
