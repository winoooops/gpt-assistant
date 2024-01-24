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
`;

const ToggleButton = styled(ButtonIcon)`
  & svg {
    color: var(--color-grey-600);
  }
  
  &:focus {
    outline: none;
  }
  
  &:hover{
    & svg {
      color: var(--text-white-color);
    }
  }
`;


export default function ChatSidebarToggle() {
  // @ts-expect-error: should be fine
  const { isCollapsed, setIsCollapsed } = useContext(ChatContext);

  function toggleSidebar() {
    setIsCollapsed((v: boolean) => !v);
  }

  return (
    <Toggle collapsed={isCollapsed}>
      <ToggleButton $as="dark" $size="sm" $shape="square" onClick={toggleSidebar}>
        {
          isCollapsed ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />
        }
      </ToggleButton>
    </Toggle>
  )
}