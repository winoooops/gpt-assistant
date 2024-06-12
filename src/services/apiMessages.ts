import supabase from "./supabase.service.ts";
import {ChatCompletionParams, IChatMessage } from "../features/chat/chat.type.ts";
import {Observable} from "rxjs";

export function fetchChatReply(payload: ChatCompletionParams): Observable<string> {
  // @ts-expect-error: compiler doesn't know about import meta
  const endpoint = import.meta.env.VITE_API_URL || 'https://api.openai.com/v1/'
  console.log(payload);

  return new Observable<string>((subscriber) => {
    fetch(`${endpoint}/reply`, {
      method: "POST",
      headers: {
        "Accept": "test/event-stream",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }).then((response) => {
      const reader = response.body?.pipeThrough(new TextDecoderStream).getReader();
      const read = () => {
        reader!.read().then(({ value, done}) => {
          if(done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
            read();
          }
        }).catch(error => subscriber.error(error));
      };

      read();
    }).catch(error => subscriber.error(error));
  })
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

export async function apiGetMessages() {
  const { data, error } = await supabase.from("messages")
    .select("*");

  if(error) {
    throw new Error(`Failed to get messages`);
  }

  return data as IChatMessage[];
}