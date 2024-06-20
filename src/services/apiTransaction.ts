import supabase from "./supabase.service.ts";

export async function apiGetTransactions() {
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', { ascending: false });

  if(error) {
    throw new Error("Failed to get transactions from supabase");
  }

  return transactions;
}


export async function apiUpdateTransaction() {
  const { data, error } = await supabase
    .from('transactions')
    .update({ name: 'TAO' })
    .eq('pair', 'TAOUSDT')
    .select();

  if(error) {
    throw new Error("Failed to update transaction from supabase");
  }

  return data;
}