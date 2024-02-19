import Box from "../../../ui/Box.tsx";
import {RiChat1Line, RiDeleteBack2Line, RiEdit2Line, RiMoreFill} from "react-icons/ri";
import ButtonIcon from "../../../ui/ButtonIcon.ts";
import styled from "styled-components";
import Menu from "../../../ui/Menu.tsx";

const StyledContainer = styled.div`
  margin: 1rem;
`;


const StyledChatBoxTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  width: 10rem;
  cursor: pointer; 
`


export default function ChatBox({ label, name, focus, handleClick }: {label: string, name: string | undefined, focus: boolean, handleClick: () => void}) {
  return (
    <StyledContainer>
      <Box focus={focus}>
        <RiChat1Line />
        <StyledChatBoxTitle onClick={handleClick}>{label}</StyledChatBoxTitle>
        <Menu>
          <Menu.Toggle name={name}><RiMoreFill /></Menu.Toggle>
          <Menu.List name={name}>
            <ButtonIcon $as="translucent" $size="full">
              <RiEdit2Line />
              <span>Edit</span>
            </ButtonIcon>

            <ButtonIcon $as="danger translucent" $size="full">
              <RiDeleteBack2Line />
              <span>Delete</span>
            </ButtonIcon>
          </Menu.List>
        </Menu>
      </Box>
    </StyledContainer>
  )
}
