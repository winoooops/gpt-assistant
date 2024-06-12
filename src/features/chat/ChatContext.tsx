import React, {createContext, useCallback, useEffect, useRef, useState} from "react";
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
  const { getReply } = useChatGetReply();
  const { updateConversation, isLoading: isUpdatingConversation} = useUpdateConversation();
  const parentMessageId = (messages && messages.length > 0) ? messages[messages.length - 1].id : null;
  const { containerRef, showJumpToBottom, handleScrollToBottom } = useScroll();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [pendingText, setPendingText] = useState("");
  const pendingTextRef = useRef(pendingText);
  const [prompt, setPrompt] = useState("");

  const messageList = useRef(messages);
  useEffect(() => {
    messageList.current = messages;
  }, [messages]);

  const setActiveConversation = (conversationId: string) => {
    searchParams.set("conversationId", conversationId);
    setSearchParams(searchParams);
  }

  const addPromptMessage = useCallback((message: string, role: string) => {
    if(messageList.current) {
      const updatedMessages = [...messageList.current, {
        content: {role, content: message},
        createdAt: formatCurrentDate(),
        id: `prompt-${formatCurrentDate()}`,
        parentMessageId
      }];

      console.log(updatedMessages);

      queryClient.setQueryData("messages", updatedMessages);
    } else {
      queryClient.setQueryData("messages", [{
        content: {role, content: message},
        createdAt: formatCurrentDate(),
        id: `prompt-${formatCurrentDate()}`,
        parentMessageId
      }]);
    }
  }, [parentMessageId, messageList]);


  const subscribeToReply = (prompt: string) => {
    const reply$ = getReply({ prompt, parentMessageId, conversationId: activeConversation });

    reply$.subscribe({
      next: (chunk: string) => setPendingText(chunk.toString()),
      error: (err: Error) => {
        console.error(err);
        setPendingText("Sorry, I am unable to process your request at the moment. Please try again later.");
      },
      complete: () => {
        addPromptMessage(pendingTextRef.current, "assistant");
        setPrompt("");
        setPendingText("");
      }
    });
  }



  function openConversation(pId: string) {
    setActiveConversation(pId);
  }


  return (
    <ChatContext.Provider value={{
      messages: messages || [],
      parentMessageId,
      isLoadingMessages,
      getReply,
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
      pendingText,
      setPendingText,
      prompt,
      setPrompt,
      subscribeToReply,
      pendingTextRef
    }}>
      {children}
    </ChatContext.Provider>
  );
}