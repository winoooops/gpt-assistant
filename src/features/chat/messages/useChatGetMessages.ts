import {useQuery} from "react-query";
import {apiGetMessages} from "../../../services/apiMessages.ts";
import {queryClient} from "../../../services/supabase.service.ts";

export function useGetMessages(){
  const {data: messages, error, isLoading} = useQuery({
    queryKey: ["messages"],
    queryFn: () => apiGetMessages(),
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