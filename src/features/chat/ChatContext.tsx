import React, {createContext, useCallback, useState} from "react";
import {useGetMessages} from "./useChatGetMessages.ts";
import {useChatGetReply} from "./useChatGetReply.ts";
import {formatCurrentDate} from "../../utils/fomateDate.ts";
import {queryClient} from "../../services/supabase.service.ts";
import {useScroll} from "../../hooks/useScroll.ts";
import {useGetConversations} from "./conversations/useChatGetConversations.ts";
import {useSearchParams} from "react-router-dom";
import {useUpdateConversation} from "./conversations/useChatUpdateConversation.ts";
import {ChatContextType} from "./chat.type.ts";

export const ChatContext: React.Context<ChatContextType>= createContext({} as ChatContextType);


export function MessageProvider ({children}: {children: React.ReactNode}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeConversation = searchParams.get("conversationId") || "1";
  const { messages, isLoading: isLoadingMessages} = useGetMessages();
  const { conversations, isLoading: isLoadingConversations} = useGetConversations();
  const { getReply, isLoading: isLoadingReply} = useChatGetReply();
  const { updateConversation, isLoading: isUpdatingConversation} = useUpdateConversation();
  const parentMessageId = messages && messages.length > 0 ? messages[messages.length - 1].id : null;
  const { containerRef, showJumpToBottom, handleScrollToBottom } = useScroll();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const setActiveConversation = (conversationId: string) => {
    searchParams.set("conversationId", conversationId);
    setSearchParams(searchParams);
  }

  const addPromptMessage = useCallback((prompt: string) => {
    if(messages) {
      const updatedMessages = [...messages, {
        content: {role: "user", content: prompt},
        createdAt: formatCurrentDate(),
        id: "temp",
        parentMessageId
      }];
      queryClient.setQueryData("messages", updatedMessages);
    }

  }, [messages]);

  function openConversation(pId: string) {
    setActiveConversation(pId);
  }


  return (
    <ChatContext.Provider value={{
      messages: messages || [],
      parentMessageId,
      isLoadingMessages,
      getReply,
      isLoadingReply,
      addPromptMessage,
      containerRef,
      showJumpToBottom,
      handleScrollToBottom,
      isCollapsed,
      setIsCollapsed,
      activeConversation,
      setActiveConversation,
      openConversation,
      conversations: conversations || [],
      isLoadingConversations,
      updateConversation,
      isUpdatingConversation,
    }}>
      {children}
    </ChatContext.Provider>
  );
}


