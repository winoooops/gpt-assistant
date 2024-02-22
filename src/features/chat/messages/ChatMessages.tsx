import styled from "styled-components";
import ButtonIcon from "../../../ui/ButtonIcon.ts";
import {RiArrowDownLine} from "react-icons/ri";
import ChatMessage from "./ChatMessage.tsx";
import {IChatMessage} from "../chat.type.ts";
import {useContext, useEffect} from "react";
import {ChatContext} from "../ChatContext.tsx";

const StyledChatHistory = styled.div`
  display: flex;
  flex-direction: column;
  //flex-grow: 1;
  overflow-y:auto;
  gap: 0.2rem;
  text-align: start;
  padding: 2rem;
  position: relative;
`

const FloatingButton = styled(ButtonIcon)`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`


export default function ChatMessages() {
  const { messages, containerRef, handleScrollToBottom, showJumpToBottom } = useContext(ChatContext);

  useEffect(() => {
    handleScrollToBottom();
  }, [messages, handleScrollToBottom]);

  if(messages.length === 0) return <StyledChatHistory><p>Chat</p></StyledChatHistory>


  return (
    <StyledChatHistory ref={containerRef}>
      {
        messages.map((message: IChatMessage) => <ChatMessage key={message.id} message={message}/>)
      }
      { showJumpToBottom &&
        <FloatingButton onClick={handleScrollToBottom} $shape="square" $as="translucent">
          <RiArrowDownLine />
        </FloatingButton>
      }
    </StyledChatHistory>
  )
}
