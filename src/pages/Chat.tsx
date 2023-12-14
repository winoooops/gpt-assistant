import UserInput from "../features/chat/UserInput.tsx";
import ChatHistory from "../features/chat/ChatHistory.tsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ;
`


export default function Chat() {
  return (
    <Container>
      <ChatHistory />
      <UserInput/>
    </Container>
  )
}
