import styled from "styled-components";
import Portfolio from "../features/crypto/portafolio/Portfolio.tsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.8rem;
  border: 1px  solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
`;
export default function CryptoPage() {
  return (
    <StyledContainer>
      <Portfolio />
    </StyledContainer>
  )
}