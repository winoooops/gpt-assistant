import Box from "../../ui/Box.tsx";
import {RiChat1Line, RiDeleteBack2Line, RiEdit2Line, RiMenu2Fill} from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon.ts";
import styled from "styled-components";
import Menu from "../../ui/Menu.tsx";

const StyledChatBox = styled.div`
  margin: 1rem;
`;

const StyledChatBoxTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`


export default function ChatBox({ title, name }: {title: string, name: string }) {
  return (
    <StyledChatBox>
      <Box>
        <RiChat1Line />
        <StyledChatBoxTitle>{title}</StyledChatBoxTitle>
        <Menu>
          <Menu.Button name={name}><RiMenu2Fill/></Menu.Button>
          <Menu.List name={name}>
            <ButtonIcon $as="transparent">
              <RiEdit2Line />
              <span>Edit</span>
            </ButtonIcon>

            <ButtonIcon $as="transparent">
              <RiDeleteBack2Line />
              <span>Delete</span>
            </ButtonIcon>
          </Menu.List>
        </Menu>
      </Box>
    </StyledChatBox>
  )
}
