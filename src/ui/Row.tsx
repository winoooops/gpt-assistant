import styled from "styled-components";

const Row = styled.div<{reversed?: boolean, direction?: string}>`
  display: flex;
  justify-content: ${props => props.direction ? props.direction : "flex-start"};
  gap: 0.5rem;
  flex-direction: ${props => props.reversed ? "row-reverse" : "row"};
  align-items: center;
`;

export default Row;