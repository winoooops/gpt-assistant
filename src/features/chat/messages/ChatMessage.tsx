import styled, {css} from "styled-components";
import {useShowText} from "../../../utils/useRenderText.tsx";
import {IChatMessage} from "../chat.type.ts";
import DateItem from "../../../ui/DateItem.tsx";
import Avatar from "../../../ui/Avatar.tsx";
import Column from "../../../ui/Column.tsx";
import Row from "../../../ui/Row.tsx";

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

export default function ChatMessage({ message: { content, createdAt } }: { message: IChatMessage }) {
  const { role, content: text } = content;
  const isBot = role === "assistant";
  const formattedText = useShowText(text);

  return (
    <Row reversed={!isBot}>
      <Avatar isBot={isBot} />

      <Column $isLeft={isBot}>
        {
          createdAt && <DateItem date={createdAt}/>
        }
        <StyledMessage role={role}>
          {formattedText}
        </StyledMessage>
      </Column>
    </Row>
  );
}
