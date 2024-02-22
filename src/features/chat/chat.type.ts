import React from 'react';

export enum Role {
  User,
  Assistant,
}

interface MutationConfig {
  onSuccess?: (data: IChatMessageResponse) => void;
  onError?: (error: { message: string }) => void;
}


export interface ChatContextType {
   messages: IChatMessage[];
   parentMessageId: string | null;
   isLoadingMessages: boolean;
   isLoadingReply: boolean;
   addPromptMessage: (prompt: string) => void;
   containerRef: React.RefObject<HTMLDivElement>;
   showJumpToBottom: boolean;
   handleScrollToBottom: () => void;
   isCollapsed: boolean;
   setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
   activeConversation: string | null;
   openConversation: (id: string) => void;
   conversations: IChatConversation[];
   isLoadingConversations: boolean;
   updateConversation: (payload: ChatConversationParams) => void;
   getReply: (payload: ChatCompletionParams, config?: MutationConfig) => void;
   isUpdatingConversation: boolean;
   setActiveConversation: (id: string) => void;
}



export interface MessageContent {
  role: string;
  content: string;
}

export interface IChatMessage {
  id?: string,
  createdAt: string,
  parentMessageId?: string,
  content: MessageContent,
}

export interface IChatMessageResponse {
  type: string;
  reply: string;
}

export interface IChatConversation {
  id: string,
  created_at: string;
  updated_at: string;
  isOnTop: boolean,
  label?: string,
  icon?: string,
}


export interface ChatCompletionParams {
  prompt: string;
  parentMessageId: string | null;
  conversationId: string | null,
}

export interface ChatConversationParams {
  id: string;
  conversationData: Partial<IChatConversation>;
}