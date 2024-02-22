import {useQuery} from "react-query";
import {queryClient} from "../../../services/supabase.service.ts";
import {apiGetMessagesFromConversationId} from "../../../services/apiMessages.ts";
import {useSearchParams} from "react-router-dom";

export function useGetMessages() {
  const [searchedParams] = useSearchParams();
  const conversationId = searchedParams.get("conversationId") || "1";

  const {data: messages, error, isLoading} = useQuery({
    queryKey: ["messages", conversationId],
    queryFn: () => apiGetMessagesFromConversationId(conversationId),
    onSuccess:(data) => {
      queryClient.setQueryData("parentMessage", data[data.length - 1])
      // queryClient.invalidateQueries("messages");
    }
  })

  if (error) {
    console.error(error);
  }

  return {messages, isLoading};
}