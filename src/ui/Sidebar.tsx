import styled from "styled-components";
import React from "react";

const StyledSidebar = styled.aside<{ collapsed: boolean }>`
  border-right: ${ props => props.collapsed ? "0":"1px solid var(--color-grey-400)"};
  background: var(--color-grey-900);
  flex-direction: column;
  justify-content: flex-start;
  transition: width 0.5s ease-in-out, color .5s var(--color-grey-600), 
    border-right-width 0.5s 0.5px;
  width: ${props => props.collapsed ? "0" : "30vw" };
  position: relative;
`;


export default function Sidebar({ children, isCollapsed }: { children: React.ReactNode[], isCollapsed: boolean }) {
  console.log(`isSidebar closed: ${isCollapsed}`);
  return (
    <StyledSidebar collapsed={isCollapsed}>
      <nav>
        {children}
      </nav>
    </StyledSidebar>
  )
}
