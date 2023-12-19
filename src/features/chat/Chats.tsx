import {IChatMessage} from "./chat.type.ts";
import {useContext} from "react";
import {ChatContext} from "./ChatContext.tsx";
import ChatBox from "./ChatBox.tsx";

export default function Chats() {
  // @ts-expect-error: should be fine
  const { messages } = useContext(ChatContext);

  const titles = messages.filter((message: IChatMessage) => !message.parentMessageId);

  return (
    <>
      {titles.map((title: IChatMessage) => <ChatBox key={title.id} title={title.content.content}/>)}
    </>
  )
}