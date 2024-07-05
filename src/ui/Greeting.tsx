import styled from "styled-components";

const StyledGreeting = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.span`
    padding: 0.2rem 0.2rem;
    & img {
        width: 3rem;
        height: 3rem;
    } 
`

export default function Greeting() {
  return (
    <StyledGreeting>
      <StyledLogo>
        <img src="/public/cat-typing-12.gif" alt="cat-typing"/>
      </StyledLogo>
      <h2>How Can I help u today?</h2>
    </StyledGreeting>
  );
}