import { MdSend } from "react-icons/md";

import styled from "styled-components";
import {FormEvent, useCallback, useContext, useEffect, useState} from "react";
import ButtonIcon from "../../ui/ButtonIcon.ts";
import InputField from "../../ui/InputField.tsx";
import {ChatContext} from "./ChatContext.tsx";
import {IChatMessageResponse} from "./chat.type.ts";

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
  const [prompt, setPrompt] = useState("");
  const { parentMessageId, getReply, isLoadingReply, addPromptMessage, activeConversation } = useContext(ChatContext);


  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    showAnswer();
  }

  const showAnswer = useCallback(() => {
    if(!prompt) {
      return;
    }

    addPromptMessage(prompt);

    getReply(
      {
        prompt,
        parentMessageId,
        conversationId: activeConversation
      },
      {
        onSuccess: (data: IChatMessageResponse) => {
          addPromptMessage(data.reply);
          setPrompt("");
        }
      }
    )
  }, [getReply, parentMessageId, prompt, addPromptMessage]);


  useEffect(() => {
    function handleKeyboardEvent(e: KeyboardEvent) {
      if(e.key === "Enter" && !e.shiftKey) {
        showAnswer();
      }
    }

    document.addEventListener("keydown", handleKeyboardEvent);

    return () => document.removeEventListener("keydown", handleKeyboardEvent);
  }, [showAnswer])


  if(isLoadingReply) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <StyledInputForm onSubmit={handleSubmit}>
        <InputField prompt={prompt} setPrompt={setPrompt} />
        <ButtonIcon type="submit" $as="primary" $size="lg" disabled={isLoadingReply}><MdSend /></ButtonIcon>
      </StyledInputForm>
    </Container>
  )
}
