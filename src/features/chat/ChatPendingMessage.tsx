import styled, {css} from "styled-components";
import Avatar from "../../ui/Avatar.tsx";
import Row from "../../ui/Row.tsx";
import Column from "../../ui/Column.tsx";
import {useContext, useEffect, useState} from "react";
import {ChatContext} from "./ChatContext.tsx";

const StyledMessage = styled.div<{ role: string }>`
  ${(props) => props.role === "user" &&
  css`
      background-color: var(--color-green-600);
      color: var(--color-grey-50);
    `
}

  ${(props) => props.role === "assistant" &&
  css`
      background-color: var(--color-grey-200);
      color: var(--color-grey-900);
    `
}
  
  padding: 0.5rem;
  border-radius: var(--border-radius-lg);
  
  & > p:first-child {
    margin-top: 0;
  }
  
  & > p:last-child {
    margin-bottom: 0;
  }
  
  & > ul, ol {
    padding-left: 2rem;
  }
`;

export default function ChatPendingMessage() {
  const { pendingText } = useContext(ChatContext);
  const [textContent, setTextContent] = useState<string>("");


  useEffect(() => {
    if(pendingText) {
      setTextContent(prev => {
        return prev + pendingText
      });
    } else {
      setTextContent("");
    }

  }, [pendingText]);

  if(pendingText === "") return null;


  return (
    <Row reversed={false}>
      <Avatar isBot={true} />

      <Column $isLeft={true}>
        <StyledMessage role="assistant">
          { textContent }
        </StyledMessage>
      </Column>
    </Row>
  );
}
