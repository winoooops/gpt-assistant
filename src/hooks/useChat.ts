import {useState} from "react";

export function useChat() {
  const [parentMessageId, setParentMessageId] = useState(null);

  return {parentMessageId, setParentMessageId};
}