import styled from "styled-components";

const Row = styled.div<{reversed?: boolean}>`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-direction: ${props => props.reversed ? "row-reverse" : "row"};
`;

export default Row;