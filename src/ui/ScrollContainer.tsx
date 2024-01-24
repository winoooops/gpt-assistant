import styled from "styled-components";

const ScrollableContainer = styled.div`
  height: calc(100vh - 2px - 1.6rem); 
  overflow: auto;
  overflow-x: hidden;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
`

export default ScrollableContainer;