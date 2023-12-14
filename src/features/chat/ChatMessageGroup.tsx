import ChatMessage from "./ChatMessage.tsx";
import styled from "styled-components";
import {Role} from "./Chat.type.ts";

const StyledMessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
`


export default function ChatMessageGroup({ message }: { message: { prompt: string, response: string }}) {
  const { prompt, response } = message;

  return (
    <StyledMessageGroup>
      <ChatMessage message={prompt} role={Role.User} />
      <ChatMessage message={response} role={Role.Bot} />
    </StyledMessageGroup>
  )
}
