import supabase from "./supabase.service.ts";
import {ChatConversationParams} from "../features/chat/chat.type.ts";

export async function apiGetConversations() {
  const { data, error } = await supabase.from("conversations")
    .select("*")


  if(error) {
    throw new Error("Failed to get conversations from supabase");
  }

  console.log(data);

  return data;
}

export async function apiUpdateConversation(payload: ChatConversationParams) {
  const { id,conversationData } = payload;

  const { data, error } = await supabase.from("conversations")
    .update({ ...conversationData })
    .eq("id", Number(id));

  if(error) {
    throw new Error("Failed to update conversation from supabase");
  }

  return data;
}