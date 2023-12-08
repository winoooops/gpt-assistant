import Heading from "../ui/Heading.tsx";
import {useGetChat} from "../features/chat/useChat.ts";
import {useState} from "react";

export default function Chat() {
  const { isLoading, getReply } = useGetChat();
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");


  function showAnswer() {
    getReply(prompt, { onSuccess: ({data}) => setReply(data) })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }


  return (
    <>
      <Heading as="h1">Chat</Heading>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={showAnswer}>Send</button>
      <p>{reply}</p>
    </>
  )
}
