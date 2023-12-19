import Chats from "../features/chat/Chats.tsx";
import styled from "styled-components";

const StyledSidebar = styled.div`
  border-right: 1px solid var(--color-grey-600);
  background: var(--color-grey-900);
`;


export default function Sidebar() {
  return (
    <StyledSidebar>
      <Chats />
    </StyledSidebar>
  )
}
