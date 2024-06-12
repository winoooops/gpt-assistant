import {ChatCompletionParams} from "./chat.type.ts";
import {fetchChatReply} from "../../services/apiMessages.ts";
import {Observable} from "rxjs";

export function useChatGetReply() {
  const getReply = (payload: ChatCompletionParams): Observable<string> => {
    return new Observable<string>((subscriber) => {
      fetchChatReply(payload).subscribe({
        next: (message) => subscriber.next(message),
        error: (error) => subscriber.error(error),
        complete: () => {
          subscriber.complete();
        }
      })
    })
  }

  return { getReply };
}