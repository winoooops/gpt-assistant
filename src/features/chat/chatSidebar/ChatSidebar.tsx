import {ChatContext} from "../ChatContext.tsx";
import {useContext} from "react";
import Sidebar from "../../../ui/Sidebar.tsx";
import ChatSidebarMenu from "./ChatSidebarMenu.tsx";
import ChatSidebarToggle from "./ChatSidebarToggle.tsx";
import Conversations from "../Conversations.tsx";
import ScrollableContainer from "../../../ui/ScrollContainer.tsx";

export default function ChatSidebar() {
  // @ts-expect-error: isCollapsed should be working
  const { isCollapsed } = useContext(ChatContext);

  return (
    <Sidebar isCollapsed={isCollapsed}>
      <ScrollableContainer>
        <Conversations />
        <ChatSidebarMenu />
      </ScrollableContainer>

      <ChatSidebarToggle />
    </Sidebar>
  )
}
