import {ChatCompletionParams, IChatMessage} from "../features/chat/chat.type.ts";
import supabase from "./supabase.service.ts";

export async function fetchChatReply(payload: ChatCompletionParams) {
  // @ts-expect-error: compiler doesn't know about import meta
  const endpoint = import.meta.env.VITE_API_URL || 'https://api.openai.com/v1/'

  const response = await fetch(`${endpoint}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...payload })
  });

  const data = await response.json();
  if(!data) {
    throw new Error("No data");
  }
  return data;
}

export async function apiGetMessageById(id: string) {
  const { data: message, error } = await supabase.from("messages")
    .select("*")
    .eq("id", id)
    .single();

  if(error) {
    throw new Error(`Failed to get message from id: ${id}`);
  }

  return message;
}

export async function apiGetMessages() {
  const { data, error } = await supabase.from("messages")
    .select("*");

  if(error) {
    throw new Error(`Failed to get messages`);
  }

  return data as IChatMessage[];
}