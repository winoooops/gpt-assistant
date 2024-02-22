import supabase from "./supabase.service.ts";
import {ChatCompletionParams, IChatMessageResponse} from "../features/chat/chat.type.ts";

export async function fetchChatReply(payload: ChatCompletionParams) {
  // @ts-expect-error: compiler doesn't know about import meta
  const endpoint = import.meta.env.VITE_API_URL || 'https://api.openai.com/v1/'

  const response = await fetch(`${endpoint}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...payload})
  });

  const data: IChatMessageResponse = await response.json();
  if (!data) {
    throw new Error("No data");
  }

  return data;
}

export async function apiGetMessagesFromConversationId(conversationId: string) {
  const {data, error} = await supabase.from("messages")
    .select("*")
    .order("parentMessageId", {ascending: true, nullsFirst: true})
    .eq("conversationId", conversationId);

  if (error) {
    throw new Error(`Failed to get messages from conversation id: ${conversationId}`);
  }

  return data;
}

export async function apiGetMessageById(id: string) {
  const {data: message, error} = await supabase.from("messages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`Failed to get message from id: ${id}`);
  }

  return message;
}