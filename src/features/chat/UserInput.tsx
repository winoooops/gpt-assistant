import { MdSend } from "react-icons/md";

import styled from "styled-components";
import {FormEvent, useCallback, useEffect, useState} from "react";
import {useChatCompletion} from "./useChat.ts";
import ButtonIcon from "../../ui/ButtonIcon.ts";
import InputField from "../../ui/InputField.tsx";

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


export default function UserInput() {
  const [prompt, setPrompt] = useState("");
  const { isLoading, getReply } = useChatCompletion();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    showAnswer();
  }

  const showAnswer = useCallback(() => {
    getReply(
      prompt,
      {
        onSuccess: ({data}) =>{
          // sent prompt and response to conversation
          console.log(prompt);
          console.log(data);
          console.log("should sent this to conversation");
          // clear prompt input
          setPrompt("");
        }
      });
  }, [getReply, prompt]);


  useEffect(() => {
    function handleKeyboardEvent(e: KeyboardEvent) {
      if(e.key === "Enter" && !e.shiftKey) {
        showAnswer();
      }
    }

    document.addEventListener("keydown", handleKeyboardEvent);

    return () => document.removeEventListener("keydown", handleKeyboardEvent);
  }, [showAnswer])


  if(isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <StyledInputForm onSubmit={handleSubmit}>
        <InputField prompt={prompt} setPrompt={setPrompt} />
        <ButtonIcon type="submit" $as="primary" size="lg"><MdSend /></ButtonIcon>
      </StyledInputForm>
    </Container>

  )
}
