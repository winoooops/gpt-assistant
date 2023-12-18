import {QueryClient, useMutation} from "react-query";
import {ChatCompletionParams} from "./chat.type.ts";
import {fetchChatReply} from "../../services/apiChat.ts";
export function useGetChatReply() {
  const queryClient = new QueryClient();
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