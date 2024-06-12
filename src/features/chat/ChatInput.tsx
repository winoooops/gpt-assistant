import { MdSend } from "react-icons/md";

import styled from "styled-components";
import { FormEvent, useContext, useEffect } from "react";
import ButtonIcon from "../../ui/ButtonIcon.ts";
import InputField from "../../ui/InputField.tsx";
import {ChatContext} from "./ChatContext.tsx";

const Container = styled.div`
  padding: 1rem;
`


const StyledInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap:1rem; 
  left:0;
  right:0;
  position: sticky;
  bottom: 1rem;
`;


export default function ChatInput() {
  const { prompt, addPromptMessage, pendingText, pendingTextRef, subscribeToReply} = useContext(ChatContext);

  // Update the ref whenever pendingText changes
  useEffect(() => {
    pendingTextRef.current += pendingText;
  }, [pendingText]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if(!prompt) return;

    addPromptMessage(prompt, "user");

    subscribeToReply(prompt);
  }

  return (
    <Container>
      <StyledInputForm onSubmit={handleSubmit}>
        <InputField />
        <ButtonIcon type="submit" $as="primary" $size="lg"><MdSend /></ButtonIcon>
      </StyledInputForm>
    </Container>
  )
}
