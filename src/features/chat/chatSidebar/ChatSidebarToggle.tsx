import {RiArrowLeftDoubleFill, RiArrowRightDoubleFill} from "react-icons/ri";
import ButtonIcon from "../../../ui/ButtonIcon.ts";
import {useContext} from "react";
import {ChatContext} from "../ChatContext.tsx";
import styled from "styled-components";

const Toggle = styled.div<{collapsed: boolean}>`
  position: absolute; 
  top: 50%;
  right: 0; 
  transform: translateX(50%);
  overflow: hidden;
  // width: ${props => props.collapsed ? "50%" : "100%"};
`;


export default function ChatSidebarToggle() {
  // @ts-expect-error: should be fine
  const { isCollapsed, setIsCollapsed } = useContext(ChatContext);

  function toggleSidebar() {
    setIsCollapsed((v: boolean) => !v);
  }

  return (
    <Toggle collapsed={isCollapsed}>
      <ButtonIcon $size="sm" $shape="square" onClick={toggleSidebar}>
        {
          isCollapsed ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />
        }
      </ButtonIcon>
    </Toggle>
  )
}
