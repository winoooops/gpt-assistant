import Chats from "../features/chat/Chats.tsx";
import styled from "styled-components";
import {ChatContext} from "../features/chat/ChatContext.tsx";
import {useContext} from "react";
import ChatSidebarToggle from "../features/chat/chatSidebar/ChatSidebarToggle.tsx";
import ChatSidebarMenu from "../features/chat/chatSidebar/ChatSidebarMenu.tsx";

const StyledSidebar = styled.aside<{ collapsed: boolean }>`
  border-right: ${ props => props.collapsed ? "0":"1px solid var(--color-grey-400)"};
  background: var(--color-grey-900);
  flex-direction: column;
  transition: width 0.5s ease-in-out, color .5s var(--color-grey-600), 
    border-right-width 0.5s 0.5px;
  position: relative;
  width: ${props => props.collapsed ? "0" : "30vw" };
`;


export default function Sidebar() {
  // @ts-expect-error: should be fine
  const { isCollapsed } = useContext(ChatContext);

  return (
    <StyledSidebar collapsed={isCollapsed}>
      <ChatSidebarMenu />
      <Chats />
      <ChatSidebarToggle />
    </StyledSidebar>
  )
}
