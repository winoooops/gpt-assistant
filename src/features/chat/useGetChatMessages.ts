import {QueryClient, useQuery} from "react-query";
import {apiGetMessages} from "../../services/apiChat.ts";

export function useGetMessages() {
  const queryClient = new QueryClient();

  const {data: messages, error, isLoading} = useQuery({
    queryKey: ["messages"],
    queryFn: () => apiGetMessages(),
    onSuccess:(data) => {
      console.log(data);
      queryClient.setQueryData("parentMessage", data[data.length - 1])
    }
  })

  if (error) {
    console.error(error);
  }

  return {messages, isLoading};
}