import React, {createContext, useCallback} from "react";
import {useGetMessages} from "./useChatGetMessages.ts";
import {useChatGetReply} from "./useChatGetReply.ts";
import {formatCurrentDate} from "../../utils/fomateDate.ts";
import {queryClient} from "../../services/supabase.service.ts";
import {useScroll} from "../../hooks/useScroll.ts";


export const ChatContext= createContext({});


export function MessageProvider ({children}: {children: React.ReactNode}) {
  const { messages, isLoading: isLoadingMessages} = useGetMessages();
  const { getReply, isLoading: isLoadingReply} = useChatGetReply();
  const parentMessageId = messages && messages.length > 0 ? messages[messages.length - 1].id : null;
  const { containerRef, showJumpToBottom, handleScrollToBottom } = useScroll();


  const addPromptMessage = useCallback((prompt: string) => {

    if(messages) {
      const updatedMessages = [...messages, {content: {role: "user", content: prompt}, createdAt: formatCurrentDate()}];
      console.log(updatedMessages);
      queryClient.setQueryData("messages", updatedMessages);
    }

  }, [messages]);


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
      handleScrollToBottom
    }}>
      {children}
    </ChatContext.Provider>
  );
}


