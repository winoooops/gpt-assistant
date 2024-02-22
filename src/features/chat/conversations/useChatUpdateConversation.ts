import {useMutation} from "react-query";
import {apiUpdateConversation} from "../../../services/apiConversation.ts";
import {ChatConversationParams} from "../chat.type.ts";
import {queryClient} from "../../../services/supabase.service.ts";

export function useUpdateConversation() {
  const { isLoading, mutate: updateConversation} = useMutation({
    mutationFn: (payload:ChatConversationParams) => apiUpdateConversation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries("conversations");
    },
    onError: ({message}) => {
      console.error(message);
    }
  });

  return {isLoading, updateConversation};
}