import {useMutation, useQuery} from "react-query";
import {apiGetMessageById, fetchChatReply} from "../../services/apiChat.ts";
import {ChatCompletionParams} from "./Chat.type.ts";

export function useChatCompletion(){
  const {isLoading, mutate: getReply} = useMutation({
    mutationFn: (payload: ChatCompletionParams) => fetchChatReply(payload),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: ({ message }) => {
      console.error(message);
    }
  });

  return {isLoading, getReply};
}

export function useGetMessage() {
  const id = "1";

  const { data: message, error, isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: () => apiGetMessageById(id)
  })

  if(error) {
    console.error(error);
  }

  return {message, isLoading};
}