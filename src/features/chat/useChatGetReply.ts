import {useMutation} from "react-query";
import {ChatCompletionParams} from "./chat.type.ts";
import {queryClient} from "../../services/supabase.service.ts";
import {fetchChatReply} from "../../services/apiMessages.ts";

export function useChatGetReply() {

  const {isLoading, mutate: getReply} = useMutation({
    mutationFn: (payload: ChatCompletionParams) => fetchChatReply(payload),
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
    onError: ({message}) => {
      console.error(message);
    }
  });

  return {isLoading, getReply};
}