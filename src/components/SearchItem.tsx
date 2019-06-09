import React from "react";
import styled from "styled-components";

const Question = require("../assets/Icons/Question.svg");
const QuestionHover = require("../assets/Icons/QuestionHover.svg");

interface SearchProps {
  color?: string;
  text?: string;
  onClick?: any;
}

const SearchItem: React.FC<SearchProps> = props => {
  return (
    <SearchItemTag {...props}>
      {props.text}
      <ImgBlock className="Image">
        <img
          alt="Imagem da tabela de itens, demonstação de conteudo"
          className="active"
          src={Question}
        />
        <img
          alt="Imagem da tabela de itens, demonstação de conteudo"
          title="Clique para saber mais"
          className="hover"
          src={QuestionHover}
        />
      </ImgBlock>
    </SearchItemTag>
  );
};

const SearchItemTag = styled.div<SearchProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: 500px;
  width: 100%;
  margin: 0 20px 0 20px;
  background-color: ${props => props.color};
  padding: 7px;
  box-sizing: border-box;
  cursor: pointer;

  color: #4a4a4a;
  font-family: Open Sans;

  .hover {
    display: none;
  }

  .Image:hover {
    .active {
      display: none;
    }

    .hover {
      display: flex;
    }
  }
`;

const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export default SearchItem;
