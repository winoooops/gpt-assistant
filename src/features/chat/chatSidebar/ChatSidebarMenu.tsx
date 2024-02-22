import {RiLoginBoxLine, RiSettings2Line} from "react-icons/ri";
import Menu from "../../../ui/Menu.tsx";
import ButtonIcon from "../../../ui/ButtonIcon.ts";
import {useContext} from "react";
import {ChatContext} from "../ChatContext.tsx";
import styled from "styled-components";
import Avatar from "../../../ui/Avatar.tsx";
import Row from "../../../ui/Row.tsx";


const StyledContainer = styled.div`
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-900);
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 1rem);
  cursor: pointer;
  padding: 0.5rem;
  position: sticky;
  bottom: 0;
`;

export default function ChatSidebarMenu() {
  const { isCollapsed } = useContext(ChatContext);
  if(isCollapsed) return null;

  return (
    <StyledContainer>
      <Menu>
        <Menu.Toggle name="sidebar" isRow={true}>
          <Row>
            <Avatar isBot={false} />
            <span>Username</span>
          </Row>
        </Menu.Toggle>
        <Menu.List name="sidebar">
          <ButtonIcon $as="translucent" $size="full">
            <RiSettings2Line />
            <span>Settings</span>
          </ButtonIcon>

          <ButtonIcon $as="translucent" $size="full">
            <RiLoginBoxLine />
            <span>Login</span>
          </ButtonIcon>
        </Menu.List>
      </Menu>
    </StyledContainer>
  )
}