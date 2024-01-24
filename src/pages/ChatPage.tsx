import ChatInput from "../features/chat/ChatInput.tsx";
import ChatMessages from "../features/chat/ChatMessages.tsx";
import styled from "styled-components";
import {MessageProvider} from "../features/chat/ChatContext.tsx";
import ChatSidebar from "../features/chat/chatSidebar/ChatSidebar.tsx";
import ScrollableContainer from "../ui/ScrollContainer.tsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.8rem;
  border: 1px  solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
`;



export default function ChatPage() {
  return (
    <MessageProvider>
      <StyledContainer>
        <ChatSidebar />
        <ScrollableContainer>
          <ChatMessages />
          <ChatInput/>
        </ScrollableContainer>
      </StyledContainer>
    </MessageProvider>
  )
}
