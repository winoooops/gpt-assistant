import {IChatConversation} from "./chat.type.ts";
import {useContext} from "react";
import {ChatContext} from "./ChatContext.tsx";
import ChatBox from "./chatSidebar/ChatBox.tsx";
import styled from "styled-components";

const StyledChatBoxList = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;



export default function Chats() {
  // @ts-expect-error: should be fine
  const {isCollapsed, activeConversation, conversations, isLoadingConversations, setActiveConversation} = useContext(ChatContext);

  const handleClick= (conversationId: string) => {
    setActiveConversation(conversationId);
  }


  if(isCollapsed) return null;

  if(isLoadingConversations) return <p>Loading...</p>;

  return (
    <StyledChatBoxList>
      {conversations.map((title: IChatConversation ) =>
        <ChatBox
          handleClick={() => handleClick(title.id)}
          key={title.id}
          name={title.id}
          label={title.label || ""}
          focus={activeConversation === title.id}
        />)
      }
    </StyledChatBoxList>
  )
}