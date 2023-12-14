import styled, {css} from "styled-components";
import DateItem from "../../ui/DateItem.tsx";
import Avatar from "../../ui/Avatar.tsx";
import {Role} from "./Chat.type.ts";
import Row from "../../ui/Row.tsx";
import Column from "../../ui/Column.tsx";

const StyledMessage = styled.div<{ role: Role }>`
  ${(props) => props.role === Role.User && 
    css`
      background-color: var(--color-green-600);
      color: var(--color-grey-50);
    `
  }

  ${(props) => props.role === Role.Bot && 
    css`
      background-color: var(--color-grey-200);
      color: var(--color-grey-900);
    `
  }
  
  padding: 0.5rem;
  border-radius: var(--border-radius-lg);
`;

export default function ChatMessage({ message, role }: { message: string, role: Role }) {
  const isBot = role === Role.Bot;

  return (
    <Row reversed={isBot}>
      <Column isLeft={isBot}>
        <DateItem />
        <StyledMessage role={role}>
          {message}
        </StyledMessage>
      </Column>

      <Avatar isBot={role === Role.Bot} />
    </Row>
  );
}
