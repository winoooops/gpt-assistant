
export async function fetchChatReply(prompt: string) {
  const endpoint = import.meta.env.VITE_API_URL || 'https://api.openai.com/v1/'

  const response = await fetch(`${endpoint}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  if(!data) {
    throw new Error("No data");
  }
  return data;
}