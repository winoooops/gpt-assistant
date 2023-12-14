import ChatMessageGroup from "./ChatMessageGroup.tsx";
import styled from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon.ts";
import {RiArrowDownLine} from "react-icons/ri";
import {useScroll} from "../../hooks/useScroll.ts";

const dummyMessages = [
  {
    id: 1,
    prompt: "Hello",
    response: "Remember, adding a file to .gitignore only prevents changes to that file from being staged or committed; it doesn't remove the file from the repository if it was previously committed. If the file has been committed and you want to remove it from the repository history, you may need to use the git rm --cached <file> command and commit the change. This action, however, will affect the file's history in the repository."
  },
  {
    id: 2,
    prompt: "Hello",
    response: "How can I help you today"
  },
  {
    id:3,
    prompt: "Remember, adding a file to .gitignore only prevents changes to that file from being staged or committed; it doesn't remove the file from the repository if it was previously committed. If the file has been committed and you want to remove it from the repository history, you may need to use the git rm --cached <file> command and commit the change. This action, however, will affect the file's history in the repository.",
    response: "How can I help you today"
  },
  {
    id:4,
    prompt: "Remember, adding a file to .gitignore only prevents changes to that file from being staged or committed; it doesn't remove the file from the repository if it was previously committed. If the file has been committed and you want to remove it from the repository history, you may need to use the git rm --cached <file> command and commit the change. This action, however, will affect the file's history in the repository.",
    response: "How can I help you today"
  },
];

const StyledChatHistory = styled.div`
  display: flex;
  flex-direction: column;
  //flex-grow: 1;
  overflow-y:auto;
  gap: 1rem;
  text-align: start;
  padding-bottom: 2rem;
  position: relative;
`

const FloatingButton = styled(ButtonIcon)`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`


export default function ChatHistory() {
  const {
    containerRef,
    showJumpToBottom,
    handleScrollToBottom
  } = useScroll();


  return (
    <StyledChatHistory ref={containerRef}>
      {
        dummyMessages.map((message) => <ChatMessageGroup key={message.id} message={message}/>)
      }
      { showJumpToBottom &&
        <FloatingButton onClick={handleScrollToBottom} shape="square" translucent={true}>
          <RiArrowDownLine />
        </FloatingButton>
      }
    </StyledChatHistory>
  )
}
