import ChatInput from "../features/chat/ChatInput.tsx";
import ChatMessages from "../features/chat/ChatMessages.tsx";
import styled from "styled-components";
import {MessageProvider} from "../features/chat/ChatContext.tsx";
import Sidebar from "../ui/Sidebar.tsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.8rem;
  border: 1px  solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
`;


const ScrollableContainer = styled.div`
  // TODO: why the vh is not 100vh? and why the scroll bar is showing?
  max-height: calc(100vh - 2px - 1.6rem); 
  overflow: hidden;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
`


export default function ChatPage() {
  return (
    <MessageProvider>
      <StyledContainer>
        <Sidebar />
        <ScrollableContainer>
          <ChatMessages />
          <ChatInput/>
        </ScrollableContainer>
      </StyledContainer>
    </MessageProvider>
  )
}
