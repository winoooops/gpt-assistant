export enum Role {
  User,
  Bot,
}

export interface ChatMessage {
  "role": string;
  "text": string;
}

export interface ChatCompletionParams {
  prompt: string;
  createdAt: string;
  content: ChatMessage;
  parentMessageId?: string;
}