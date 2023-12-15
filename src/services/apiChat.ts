import {ChatCompletionParams} from "../features/chat/Chat.type.ts";
import supabase from "./supabase.service.ts";

export async function fetchChatReply(payload: ChatCompletionParams) {
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