import React from "react";
import styled from "styled-components";

interface FlexProps {
  justify?: string;
  align?: string;
  flow?: string;
  style?: any;
}

const Flex: React.FC<FlexProps> = props => {
  return <FlexTag {...props} />;
};

const FlexTag = styled.div<FlexProps>`
  box-sizing: border-box;
  min-width: 100%;

  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-flow: ${props => props.flow};
`;

export default Flex;
