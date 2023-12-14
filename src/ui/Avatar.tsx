import styled from "styled-components";
import {RiOpenaiFill, RiUser5Fill} from "react-icons/ri";

const StyledAvatar = styled.span`
  padding: 0.2rem 0;
  
  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default function Avatar({ isBot }: { isBot: boolean }) {
  return (
    <StyledAvatar>
      {isBot? <RiOpenaiFill /> : <RiUser5Fill  />}
    </StyledAvatar>
  )
}
