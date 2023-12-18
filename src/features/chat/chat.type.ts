export enum Role {
  User,
  Assistant,
}

export interface MessageContent {
  role: string;
  content: string;
}

export interface IChatMessage {
  id: string,
  createdAt: string,
  parentMessageId?: string,
  content: MessageContent,
}

export interface ChatCompletionParams {
  prompt: string;
  parentMessageId: string | null;
}