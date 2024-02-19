import React, {createContext, useCallback, useState} from "react";
import {useGetMessages} from "./useChatGetMessages.ts";
import {useChatGetReply} from "./useChatGetReply.ts";
import {formatCurrentDate} from "../../utils/fomateDate.ts";
import {queryClient} from "../../services/supabase.service.ts";
import {useScroll} from "../../hooks/useScroll.ts";
import {useGetConversations} from "./useChatGetConversations.ts";
import {useSearchParams} from "react-router-dom";


export const ChatContext= createContext({});


export function MessageProvider ({children}: {children: React.ReactNode}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeConversation = Number(searchParams.get("conversationId")) || 1;
  const { messages, isLoading: isLoadingMessages} = useGetMessages();
  const { conversations, isLoading: isLoadingConversations} = useGetConversations();
  const { getReply, isLoading: isLoadingReply} = useChatGetReply();
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
      isLoadingConversations
    }}>
      {children}
    </ChatContext.Provider>
  );
}


