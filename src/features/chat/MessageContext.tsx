import React, { createContext } from "react";
import {useGetMessages} from "./useGetChatMessages.ts";
import {useGetChatReply} from "./useGetChatReply.ts";


export const MessageContext= createContext({});


export function MessageProvider ({children}: {children: React.ReactNode}) {
  const { messages, isLoading: isLoadingMessages} = useGetMessages();
  const { getReply, isLoading: isLoadingReply} = useGetChatReply();

  const parentMessageId = messages && messages.length > 0 ? messages[messages.length - 1].id : null;

  return (
    <MessageContext.Provider value={{
      messages: messages || [],
      parentMessageId,
      isLoadingMessages,
      getReply,
      isLoadingReply
    }}>
      {children}
    </MessageContext.Provider>
  );
}


