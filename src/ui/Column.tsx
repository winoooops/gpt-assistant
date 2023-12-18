import styled from "styled-components";

const Column = styled.div<{$isLeft?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$isLeft ? "flex-start" : "flex-end" };
`;

export default Column;

