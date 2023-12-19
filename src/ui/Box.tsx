import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.2rem;
  border: 1px solid var(--color-green-100);
  border-radius: var(--border-radius-md);
`

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  )
}
