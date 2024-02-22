import {IChatConversation} from "./chat.type.ts";
import {useContext} from "react";
import {ChatContext} from "./ChatContext.tsx";
import ConversationBox from "./chatSidebar/ConversationBox.tsx";
import styled from "styled-components";
import {isWithinSevenDays, isWithinThirtyDays} from "../../utils/fomateDate.ts";

const StyledChatBoxList = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTitle = styled.h3`
  color: var(--color-grey-500);
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 1rem; 
`



export default function Conversations({ filter }: { filter: "7" | "30" | "pined"}) {
  const {isCollapsed, activeConversation, conversations, isLoadingConversations, setActiveConversation} = useContext(ChatContext);

  let filteredConversations: IChatConversation[];

  switch (filter) {
    case "pined":
      filteredConversations = conversations.filter((conversations: IChatConversation) => conversations.isOnTop);
      break;
    case "7":
      filteredConversations = conversations.filter((conversations: IChatConversation) => isWithinSevenDays(conversations.updated_at) && !conversations.isOnTop);
      break;
    case "30":
      filteredConversations = conversations.filter((conversations: IChatConversation) => isWithinThirtyDays(conversations.updated_at) && !conversations.isOnTop);
      break;
    default:
      filteredConversations = [];
      break;
  }

  const handleClick= (conversationId: string) => {
    setActiveConversation(conversationId);
  }


  if(isCollapsed) return null;

  if(isLoadingConversations) return <p>Loading...</p>;

  return (
    <StyledChatBoxList>
      {
        filter !== "pined" && filteredConversations.length > 0 && <StyledTitle>Last {filter} days</StyledTitle>
      }

      {filteredConversations.map((title: IChatConversation ) =>
        <ConversationBox
          id={title.id}
          handleClick={() => handleClick(title.id)}
          key={title.id}
          label={title.label || ""}
          focus={activeConversation === title.id}
          pinned={title.isOnTop}
        />)
      }
    </StyledChatBoxList>
  )
}