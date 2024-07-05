import {ChatContext} from "../ChatContext.tsx";
import {useContext} from "react";
import Sidebar from "../../../ui/Sidebar.tsx";
// import ChatSidebarMenu from "./ChatSidebarMenu.tsx";
import ChatSidebarToggle from "./ChatSidebarToggle.tsx";
import Conversations from "../conversations/Conversations.tsx";
import ScrollableContainer from "../../../ui/ScrollContainer.tsx";
import {StyledConversationBlocks} from "../conversations/ConversationBlocks.tsx";
import ChatSidebarMenu from "./ChatSidebarMenu.tsx";

export default function ChatSidebar() {
  const { isCollapsed } = useContext(ChatContext);

  return (
    <Sidebar isCollapsed={isCollapsed}>
      <ScrollableContainer>
        <StyledConversationBlocks>

          <Conversations filter="pined"/>
          <Conversations filter="7"/>
          <Conversations filter="30"/>
        </StyledConversationBlocks>

        <ChatSidebarMenu />
      </ScrollableContainer>
      <ChatSidebarToggle />
    </Sidebar>
  )
}
