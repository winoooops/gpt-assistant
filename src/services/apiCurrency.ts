export async function getCurrency() {
  // @ts-expect-error: compiler doesn't know about import meta
  const url = import.meta.env.VITE_API_URL || "";


  const response = await fetch(`${url}/crypto/currency/trending/latest?limit=5&start=1`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content": "application/json"
    },
  });
  const data = await response.json()

  return data;
}