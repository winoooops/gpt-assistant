import ChatInput from "../features/chat/ChatInput.tsx";
import ChatMessages from "../features/chat/ChatMessages.tsx";
import styled from "styled-components";
import {MessageProvider} from "../features/chat/MessageContext.tsx";

const Container = styled.div`
  height: 100vh; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export default function Chat() {
  return (
    <MessageProvider>
      <Container>
        <ChatMessages />
        <ChatInput/>
      </Container>
    </MessageProvider>
  )
}
