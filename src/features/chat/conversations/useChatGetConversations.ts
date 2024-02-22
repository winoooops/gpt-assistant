import {useQuery} from "react-query";
import {apiGetConversations} from "../../../services/apiConversation.ts";

export function useGetConversations() {
  const { data: conversations, error, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => apiGetConversations(),
  });

  if(error) {
    console.error(error);
  }

  return { conversations, isLoading }
}