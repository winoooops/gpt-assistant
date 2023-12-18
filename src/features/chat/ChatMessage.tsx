import styled, {css} from "styled-components";
import DateItem from "../../ui/DateItem.tsx";
import Avatar from "../../ui/Avatar.tsx";
import {IChatMessage } from "./chat.type.ts";
import Row from "../../ui/Row.tsx";
import Column from "../../ui/Column.tsx";

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
`;

export default function ChatMessage({ message: { content, createdAt } }: { message: IChatMessage }) {
  const { role, content: text } = content;
  const isBot = role === "assistant";

  return (
    <Row reversed={isBot}>
      <Column $isLeft={isBot}>
        <DateItem date={createdAt}/>
        <StyledMessage role={role}>
          {text}
        </StyledMessage>
      </Column>

      <Avatar isBot={isBot} />
    </Row>
  );
}
