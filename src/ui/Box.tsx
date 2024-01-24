import React from "react";
import styled from "styled-components";

const StyledBox = styled.div<{ $focus: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.2rem;
  border: ${props => props.$focus ? "1px solid var(--color-green-200)" : "1px solid var(--color-grey-200)" };
  border-radius: var(--border-radius-md);
  
  &:hover {
    border: 1px solid var(--color-green-100);
    &:first-child {
      color: var(--color-green-100);
    }
  }
`

export default function Box({ children, focus }: { children: React.ReactNode, focus: boolean }) {
  return (
    <StyledBox $focus={focus}>
      {children}
    </StyledBox>
  )
}