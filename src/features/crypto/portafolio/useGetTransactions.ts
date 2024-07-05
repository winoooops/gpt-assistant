import {useQuery} from "react-query";
import {apiGetTransactions} from "../../../services/apiTransaction.ts";
import {CryptoTransaction} from "../Crypto.type.ts";

export function useGetTransactions(): { transactions: CryptoTransaction[], isLoading: boolean } {
  const { data, error, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => apiGetTransactions(),
    onSuccess: (data) => {
      console.log(data);
    }
  });

  if(error) {
    console.error(error);
  }

  const transactions = data as CryptoTransaction[];

  return { transactions , isLoading };
}