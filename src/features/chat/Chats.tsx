import {IChatMessage} from "./chat.type.ts";
import {useContext} from "react";
import {ChatContext} from "./ChatContext.tsx";
import ChatBox from "./ChatBox.tsx";

export default function Chats() {
  // @ts-expect-error: should be fine
  const { messages, isCollapsed } = useContext(ChatContext);

  const titles = messages.filter((message: IChatMessage) => !message.parentMessageId);

  if(isCollapsed) return null;

  return (
    <>
      {titles.map((title: IChatMessage) => <ChatBox key={title.id} name={title.id} title={title.content.content}/>)}
    </>
  )
}