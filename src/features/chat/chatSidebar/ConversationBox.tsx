import Box from "../../../ui/Box.tsx";
import {RiChat1Line, RiDeleteBack2Line, RiEdit2Line, RiMoreFill, RiPushpin2Line, RiPushpinLine} from "react-icons/ri";
import ButtonIcon from "../../../ui/ButtonIcon.ts";
import styled from "styled-components";
import Menu from "../../../ui/Menu.tsx";
import {useContext} from "react";
import {ChatContext} from "../ChatContext.tsx";

const StyledContainer = styled.div`
  margin: 0.5rem 1rem 0.5rem 1rem;
`;


const StyledChatBoxTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  width:10rem;
  cursor: pointer; 
`


export default function ConversationBox({ id, label, focus, handleClick, pinned}: {id: string, label: string, focus: boolean, handleClick: () => void, pinned: boolean}) {
  const { updateConversation } = useContext(ChatContext);

  function handleUpdate() {
    updateConversation({id, conversationData: { isOnTop: !pinned }});
  }



  return (
    <StyledContainer>
      <Box focus={focus}>
        <RiChat1Line />
        <StyledChatBoxTitle onClick={handleClick}>{label}</StyledChatBoxTitle>
        <ButtonIcon $as="translucent" $size="xs" onClick={() => handleUpdate()}>
          {pinned ? <RiPushpinLine /> : <RiPushpin2Line />}
        </ButtonIcon>
        <Menu>
          <Menu.Toggle name={label}><RiMoreFill /></Menu.Toggle>
          <Menu.List name={label}>
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
