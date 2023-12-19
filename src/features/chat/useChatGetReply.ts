import {useMutation} from "react-query";
import {ChatCompletionParams} from "./chat.type.ts";
import {fetchChatReply} from "../../services/apiChat.ts";
import {queryClient} from "../../services/supabase.service.ts";

export function useChatGetReply() {

  const {isLoading, mutate: getReply} = useMutation({
    mutationFn: (payload: ChatCompletionParams) => fetchChatReply(payload),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("messages");
    },
    onError: ({message}) => {
      console.error(message);
    }
  });

  return {isLoading, getReply};
}