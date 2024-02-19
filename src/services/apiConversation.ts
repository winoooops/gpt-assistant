import supabase from "./supabase.service.ts";

export async function apiGetConversations() {
  const { data, error } = await supabase.from("conversations")
    .select("*")

  if(error) {
    throw new Error("Failed to get conversations from supabase");
  }

  return data;
}