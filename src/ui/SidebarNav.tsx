import {RiMenuLine} from "react-icons/ri";
import Row from "./Row.tsx";
import ButtonIcon from "./ButtonIcon.ts";
import {useContext} from "react";
import {ChatContext} from "../features/chat/ChatContext.tsx";

export default function SidebarNav() {
  // @ts-expect-error: should be fine
  const { isCollapsed } = useContext(ChatContext);

  if(isCollapsed) return null;

  return (
    <Row>
      <ButtonIcon $as="transparent">
        <span>Settings</span>
        <RiMenuLine/>
      </ButtonIcon>
    </Row>
  )
}