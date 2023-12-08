import {useMutation} from "react-query";
import {fetchChatReply} from "../../services/apiChat.ts";

export function useGetChat(){
  const {isLoading, mutate: getReply} = useMutation({
    mutationFn: fetchChatReply,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: ({ message }) => {
      console.error(message);
    }
  });

  return {isLoading, getReply};
}