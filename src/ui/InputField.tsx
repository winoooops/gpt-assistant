import styled from "styled-components";
import {ChangeEvent, useContext, useRef, useState} from "react";
import {ChatContext} from "../features/chat/ChatContext.tsx";

const StyledInputField = styled.textarea`
  overflow: hidden;
  flex-grow: 1;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  resize: none;
  &:focus {
    outline: none;
  }
`

const minRows = 1;
const maxRows = 9;

export default function InputField() {
  const [rows, setRows] = useState(minRows);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { prompt, setPrompt } = useContext(ChatContext);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);

    // TODO: add dynamic resizing based on text content
    setRows(() => {
      const currentRows = e.target.value.split("\n").length;
      return currentRows > maxRows ? maxRows : currentRows < minRows ? minRows : currentRows;
    });
  }

  return (
    <StyledInputField
      value={prompt}
      onChange={handleChange}
      rows={rows}
      ref={textareaRef}
      placeholder="Ask me something..."
    />
  );
}
